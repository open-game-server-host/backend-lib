import { getGlobalConfigBranch } from "../env";
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

class GlobalConfig extends Config<Global> {
    constructor() {
        super(
            "Global",
            "https://raw.githubusercontent.com/open-game-server-host",
            "configs",
            getGlobalConfigBranch(),
            "global.json"
        );
    }
}

const globalConfig = new GlobalConfig();

export async function getGlobalConfig(): Promise<Global> {
    return globalConfig.getConfig();
}