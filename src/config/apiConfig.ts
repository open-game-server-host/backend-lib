import { parseEnvironmentVariables } from "../env";
import { Config } from "./config";

interface Api {
    url: string;
    websocketUrl: string;
}

const env = parseEnvironmentVariables([
    {
        key: "API_CONFIG_BRANCH",
        defaultValue: "main"
    }
]);

class ApiConfig extends Config<Api> {
    constructor() {
        super({
            name: "Api",
            repo: "configs",
            branch: env.get("API_CONFIG_BRANCH")!,
            filePath: "api.json"
        });
    }
}

const apiConfig = new ApiConfig();

export async function getApiConfig(): Promise<Api> {
    return apiConfig.getConfig();
}