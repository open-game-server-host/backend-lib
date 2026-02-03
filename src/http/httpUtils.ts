import { NextFunction, Request, Response } from "express";
import { createWriteStream } from "node:fs";
import { formatErrorResponseBody, getErrorHttpStatus, OGSHError } from "../error";

export function expressErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    if ((req.method !== "GET" && req.method !== "DELETE") && req.header("content-type") !== "application/json") {
        error = new OGSHError("http/invalid-headers", `missing 'content-type: application/json' header`);
    }

    const responseBody = formatErrorResponseBody(error);
    res.status(getErrorHttpStatus(responseBody.error));
    res.send(responseBody);
}

export type BodyRequest<Body = any> = Request<any, any, Body>;

interface DownloadProgress {
    bytesTotal: number;
    bytesProcessed: number;
}
interface Download {
    contentLength: number;
    stream: ReadableStream;
}
export async function download(url: string, init?: RequestInit): Promise<Download> {
    const response = await fetch(url, init);
    if (!response.body) {
        throw new OGSHError("general/unspecified", `no response body for url '${url}'`);
    }

    const contentLength = response.headers.get("Content-Length");
    if (!contentLength) {
        throw new OGSHError("general/unspecified", `missing Content-Length header, url '${url}'`);
    }

    const reader = response.body.getReader();
    return {
        contentLength: +contentLength,
        stream: new ReadableStream({
            start(controller) {
                function push() {
                    reader.read().then(({ done, value }) => {
                        if (done) {
                            controller.close();
                            return;
                        }

                        controller.enqueue(value);
                        push();
                    });
                }
                push();
            }
        })
    };
}

export async function downloadToString(url: string, init?: RequestInit, progressCallback?: (progress: DownloadProgress) => void): Promise<string> {
    const response = await download(url, init);
    const reader = response.stream.getReader();
    const progress: DownloadProgress = {
        bytesProcessed: 0,
        bytesTotal: response.contentLength
    }
    const decoder = new TextDecoder();
    let data = "";
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        data += decoder.decode(value);
        if (progressCallback) {
            progress.bytesProcessed = Math.min(progress.bytesTotal, progress.bytesProcessed + value.byteLength);
            progressCallback(progress);
        }
    }
    return data;
}

export async function downloadToFile(url: string, filePath: string, init?: RequestInit, progressCallback?: (progress: DownloadProgress) => void) {
    const response = await download(url, init);
    const reader = response.stream.getReader();
    const progress: DownloadProgress = {
        bytesProcessed: 0,
        bytesTotal: response.contentLength
    }
    const writeStream = createWriteStream(filePath);
    await new Promise<void>(async res => {
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                return;
            }
            writeStream.write(value);
            if (progressCallback) {
                progress.bytesProcessed = Math.min(progress.bytesTotal, progress.bytesProcessed + value.byteLength);
                progressCallback(progress);
            }
        }
    });
}