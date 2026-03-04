import { parseEnvironmentVariables } from "../env";
import { Config } from "./config";

interface Container {
    nameMaxLength: number;
}

const env = parseEnvironmentVariables([
    {
        key: "CONTAINER_CONFIG_BRANCH",
        defaultValue: "main"
    }
]);

export function getContainerConfigBranch(): string {
    return env.get("CONTAINER_CONFIG_BRANCH")!;
}

class ContainerConfig extends Config<Container> {
    constructor() {
        super({
            name: "Config",
            repo: "configs",
            branch: getContainerConfigBranch(),
            filePath: "container.json"
        });
    }
}

const config = new ContainerConfig();

export async function getContainerConfig(): Promise<Container> {
    return config.getConfig();
}