import { WebSocket } from "ws";
import { OGSHError } from "../error";
import { Logger } from "../logger";

export type WsMsgHandler = (ws: WebSocket, body: any, locals: any) => void | Promise<void>;

export interface WsMsg {
    route: string;
    action: string;
    body: any;
}

export class WsRouter {
    private readonly routes = new Map<string, WsMsgHandler[]>();

    constructor(readonly route: string) {

    }

    register(action: string, ...handlers: Array<WsMsgHandler>) {
        this.routes.set(action, handlers);
    }

    async call(action: string, ws: WebSocket, body: any, locals: any, logger: Logger) {
        const handlers = this.routes.get(action);
        if (handlers) {
            try {
                for (const handler of handlers) {
                    await handler(ws, body, locals);
                }
            } catch (error) {
                logger.error(error as Error, {
                    route: this.route,
                    action
                });
            }
        } else {
            throw new OGSHError("general/unspecified", `tried to call an invalid action '${action}'`);
        }
    }
}