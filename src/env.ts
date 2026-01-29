export interface EnvironmentVariable {
    key: string;
    optional?: boolean;
    defaultValue?: string;
}

export function parseEnvironmentVariables(environmentVariables: EnvironmentVariable[] = []): Map<string, string> {
    const parsedValues = new Map<string, string>();
    const missingRequiredVariables: string[] = [];
    environmentVariables.forEach(variable => {
        if (!process.env[variable.key]) {
            if (variable.defaultValue) {
                parsedValues.set(variable.key, variable.defaultValue);
                console.log(`Using default value for environment variable '${variable.key}' (${variable.defaultValue})`);
            } else {
                missingRequiredVariables.push(variable.key);
            }
        } else {
            parsedValues.set(variable.key, process.env[variable.key]!);
        }
    });
    if (missingRequiredVariables.length > 0) {
        throw new Error(`Missing required environment variables: ${missingRequiredVariables}`);
    }
    return parsedValues;
}

const parsedVariables = parseEnvironmentVariables([
    {
        key: "BRANCH",
        defaultValue: "main"
    },
    {
        key: "GLOBAL_CONFIG_BRANCH",
        defaultValue: "main"
    },
    {
        key: "APPS_BRANCH",
        defaultValue: "main"
    }
]);

export function getBranch(): string {
    return parsedVariables.get("BRANCH")!;
}

export function getGlobalConfigBranch(): string {
    return parsedVariables.get("GLOBAL_CONFIG_BRANCH")!;
}

export function getAppsBranch(): string {
    return parsedVariables.get("APPS_BRANCH")!;
}