import { parseEnvironmentVariables } from "../env";
import { Config } from "./config";

interface Global {
    segment: {
        maxCpus: number;
        memoryMb: number;
        storageGb: number;
        price: {
            [currency: string]: number;
        }
    },
    regions: {
        [twoDigitIsoCode: string]: {
            name: string;
            region: string;
            priceMultiplier: number;
        }
    },
    appArchiveUrl: string;
    dockerRegistryUrl: string;
}

const env = parseEnvironmentVariables([
    {
        key: "GLOBAL_CONFIG_BRANCH",
        defaultValue: "main"
    }
]);

class GlobalConfig extends Config<Global> {
    constructor() {
        super({
            name: "Global",
            repo: "configs",
            branch: env.get("GLOBAL_CONFIG_BRANCH")!,
            filePath: "global.json"
        });
    }
}

const globalConfig = new GlobalConfig();

export async function getGlobalConfig(): Promise<Global> {
    return globalConfig.getConfig();
}