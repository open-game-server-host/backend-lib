import { Version } from "../config/appsConfig";

const runtimes: {[javaVersion: string]: string} = {
    java8: "jvm",
    java11: "jvm",
    java17: "jvm",
    java21: "jvm",
    java25: "jvm"
} as const;

export function getVersionRuntime(version: Version): string {
    return runtimes[version.default_runtime] || "default";
}