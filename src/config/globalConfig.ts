import { getGlobalConfigBranch } from "../env";
import { Config } from "./config";

interface Global {
    segment: {
        max_cpus: number;
        memory_mb: number;
        storage_gb: number;
        price: {
            [currency: string]: number;
        }
    },
    regions: {
        [twoDigitIsoCode: string]: {
            name: string;
            region: string;
            price_multiplier: number;
        }
    }
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