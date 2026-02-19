import { getGlobalConfigBranch } from "../env";
import { Config } from "./config";

interface Api {
    domain: string;
}

class ApiConfig extends Config<Api> {
    constructor() {
        super(
            "Global",
            "https://raw.githubusercontent.com/open-game-server-host",
            "configs",
            getGlobalConfigBranch(),
            "api.json"
        );
    }
}

const apiConfig = new ApiConfig();

export async function getApiConfig(): Promise<Api> {
    return apiConfig.getConfig();
}