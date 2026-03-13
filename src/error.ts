import { getEnvironment } from "./env";
import { HTTPStatus } from "./http/httpStatus";

export type Errors =
    | "general/unspecified"

    | "config/download-failed"

    | "container/not-found"
    | "container/image-pull-failed"
    | "container/create-failed"
    | "container/terminated"
    | "container/invalid"
    | "container/offline"
    | "container/command-failed"
    | "container/cpu-monitor-failed"
    | "container/memory-monitor-failed"
    | "container/network-monitor-failed"
    | "container/storage-monitor-failed"
    | "container/pid-not-found"
    | "container/unauthorized"
    | "container/action-queue-limit"
    | "container/segment-limit"
    | "container/invalid-name"
    | "container/invalid-segments"
    | "container/terminate-failed"

    | "app/not-found"
    | "app/variant-not-found"
    | "app/version-not-found"
    | "app/startup-files-not-found"
    | "app/download-failed"
    | "app/no-default-runtime"

    | "ws/invalid-params"
    | "ws/invalid-body"
    | "ws/connection-limit"
    | "ws/invalid-route"

    | "http/invalid-headers"
    | "http/invalid-body"
    | "http/invalid-params"

    | "auth/invalid"

    | "api/request-failed"
    
    | "env/value-invalid"

    | "daemon/invalid"
    | "daemon/not-found"
    | "daemon/invalid-cpu-arch"
    | "daemon/invalid-cpu-name"
    | "daemon/invalid-os"
    | "daemon/invalid-segments"
    | "daemon/invalid-port-range"

    | "region/no-availability"
    | "region/invalid"
    | "region/not-found"

    | "db/query-failed"

    | "ip/not-found"

    | "user/already-exists"
;

const httpErrors = new Map<Errors, number>();
httpErrors.set("general/unspecified", HTTPStatus.SERVER_ERROR);


export class OGSHError extends Error {
    constructor(readonly ogshError: Errors, readonly devDebug?: string | Error) {
        super(`${devDebug}`);
    }
}

export function getErrorHttpStatus(error: Errors): number {
    return httpErrors.get(error) || HTTPStatus.SERVER_ERROR;
}

interface ErrorResponseBody {
    error: Errors;
    devDebug?: string;
}
export function formatErrorResponseBody(error: Error | OGSHError): ErrorResponseBody {
    return {
        error: error instanceof OGSHError ? (error as OGSHError).ogshError : "general/unspecified",
        devDebug: getEnvironment() !== "live" ? error.message : undefined
    }
}