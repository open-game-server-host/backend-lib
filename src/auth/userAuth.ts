import { NextFunction, Request, Response } from "express";
import { OGSHError } from "../error";

export interface UserLocals {
    userId: string;
}

export async function userAuthMiddleware(req: Request, res: Response<any, UserLocals>, next: NextFunction) {
    if (!req.headers.authorization) {
        throw new OGSHError("auth/invalid", `user auth middleware - 'authorization' header missing`);
    }
    const token = req.headers.authorization.substring(7);
    res.locals.userId = token; // TODO authorise user properly, but for now the token is the userId for testing
    next();
}