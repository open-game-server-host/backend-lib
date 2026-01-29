import { OGSHError } from "../error";

export async function getUserIdFromAuthToken(token: string): Promise<string> {
    if (!token) {
        throw new OGSHError("auth/invalid", `token undefined`);
    }

    // TODO authenticate with firebase

    return token; // TODO for now the token is the userId for testing
}