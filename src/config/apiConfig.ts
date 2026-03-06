import { parseEnvironmentVariables } from "../env";
import { Config } from "./config";

interface Api {
    url: string;
    websocketUrl: string;
    maxWebsocketConnectionsPerUserPerContainer: number; // default 3
}

const env = parseEnvironmentVariables([
    {
        key: "API_CONFIG_BRANCH",
        defaultValue: "main"
    }
]);

export function getApiConfigBranch(): string {
    return env.get("API_CONFIG_BRANCH")!;
}

class ApiConfig extends Config<Api> {
    constructor() {
        super({
            name: "Api",
            repo: "configs",
            branch: getApiConfigBranch(),
            filePath: "api.json"
        });
    }
}

const apiConfig = new ApiConfig();

export async function getApiConfig(): Promise<Api> {
    return apiConfig.getConfig();
}