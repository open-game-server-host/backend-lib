import { parseEnvironmentVariables } from "../env";
import { Config } from "./config";

export type Apps = {[appId: string]: App};

export interface App {
    name: string;
    description: string;
    comingSoon: boolean;
    defaultVariant: string;
    variants: {
        [variantId: string]: Variant;
    }
    environmentVariables?: {[key: string]: any};
}

export interface Variant {
    name: string;
    stopCommand?: string;
    ports: {
        [portNumber: string]: string; // port number : port name
    },
    defaultRuntime: string;
    supportedRuntimes: string[];
    minimumSegments: number;
    recommendedSegments: number;
    versions: {
        [versionId: string]: Version;
    }
    environmentVariables?: {[key: string]: any};
    order: number;
}

export interface Version {
    name: string;
    currentBuild: number;
    currentBuildFileHashes: {
        [localFilePath: string]: string;
    },
    currentBuildInfo: string;
    defaultRuntime: string;
    supportedRuntimes: string[];
    minimumSegments: number;
    recommendedSegments: number;
    environmentVariables?: {[key: string]: any};
    order: number;
}

const env = parseEnvironmentVariables([
    {
        key: "APPS_BRANCH",
        defaultValue: "main"
    }
]);

class AppsConfig extends Config<Apps> {
    constructor() {
        super({
            name: "Apps",
            repo: "apps",
            branch: env.get("APPS_BRANCH")!,
            filePath: "output/apps.json"
        });
    }
}

const appsConfig = new AppsConfig();

export async function getApps(): Promise<Apps> {
    return appsConfig.getConfig();
}

export async function getApp(appId: string): Promise<App | undefined> {
    const apps = await getApps();
    return apps[appId];
}

export async function getVariant(appId: string, variantId: string): Promise<Variant | undefined> {
    const app = await getApp(appId);
    return app?.variants[variantId];
}

export async function getVersion(appId: string, variantId: string, versionId: string): Promise<Version | undefined> {
    const variant = await getVariant(appId, variantId);
    return variant?.versions[versionId];
}