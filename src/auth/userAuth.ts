import { NextFunction, Request, Response } from "express";
import { OGSHError } from "../error";

export interface UserLocals {
    userId: string;
}

export async function userAuthMiddleware(req: Request, res: Response<any, UserLocals>, next: NextFunction) {
    if (!req.headers.authorization) {
        throw new OGSHError("auth/invalid", `'authorization: bearer' header missing`);
    }
    const token = req.headers.authorization.substring(7);
    if (token.length === 0) {
        throw new OGSHError("auth/invalid", `malformed 'authorization: bearer' header`);
    }
    res.locals.userId = token; // TODO authorise user properly, but for now the token is the userId for testing
    next();
}