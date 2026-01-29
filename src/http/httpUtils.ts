import { NextFunction, Request, Response } from "express";
import { formatErrorResponseBody, getErrorHttpStatus, OGSHError } from "../error";

export function expressErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    if ((req.method !== "GET" && req.method !== "DELETE") && req.header("content-type") !== "application/json") {
        error = new OGSHError("http/invalid-headers", `missing 'content-type: application/json' header`);
    }

    const responseBody = formatErrorResponseBody(error);
    res.status(getErrorHttpStatus(responseBody.error));
    res.send(responseBody);
}