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