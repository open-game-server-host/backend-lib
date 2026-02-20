import { getAppsBranch } from "../env";
import { Config } from "./config";

export type Apps = {[appId: string]: App};

export interface App {
    name: string;
    description: string;
    coming_soon: boolean;
    default_variant: string;
    variants: {
        [variantId: string]: Variant;
    }
    environment_variables?: {[key: string]: any};
}

export interface Variant {
    name: string;
    stop_command?: string;
    ports: {
        [portNumber: string]: string; // port number : port name
    },
    default_runtime: string;
    supported_runtimes: string[];
    minimum_segments: number;
    recommended_segments: number;
    versions: {
        [versionId: string]: Version;
    }
    environment_variables?: {[key: string]: any};
    order: number;
}

export interface Version {
    name: string;
    current_build: number;
    current_build_file_hashes: {
        [localFilePath: string]: string;
    },
    current_build_info: string;
    default_runtime: string;
    supported_runtimes: string[];
    minimum_segments: number;
    recommended_segments: number;
    environment_variables?: {[key: string]: any};
    order: number;
}

class AppsConfig extends Config<Apps> {
    constructor() {
        super(
            "Apps",
            "https://raw.githubusercontent.com/open-game-server-host",
            "apps",
            getAppsBranch(),
            "output/apps.json"
        );
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