import { getGithubRawFileUrl } from "../git";
import { Logger } from "../logger";

interface ConfigInfo {
    name: string;
    repo: string;
    branch: string;
    filePath: string;
}

export abstract class Config<T> {
    private readonly logger: Logger;
    private readonly fullUrl: string;

    private callbacks: (() => void)[] = [];
    private config: T | undefined;

    constructor(info: ConfigInfo) {
        // this.fullUrl = `${this.githubOrgUrl}/${this.repo}/refs/heads/${this.branch}/${this.filePath}`;
        this.fullUrl = getGithubRawFileUrl(info.repo, info.branch, info.filePath);

        this.logger = new Logger(`CONFIG: ${info.name}`);
        this.logger.set("name", info.name);
        this.logger.set("repo", info.repo);
        this.logger.set("branch", info.branch);
        this.logger.set("filePath", info.filePath);
        this.logger.set("fullUrl", this.fullUrl);

        this.updateConfig();
    }

    private async updateConfig() {
        const response = await fetch(this.fullUrl);
        this.config = await response.json() as T;
        this.callbacks.forEach(cb => cb());
        this.callbacks = [];
        this.logger.info("Updated");
    }

    async getConfig(): Promise<T> {
        if (!this.config) {
            await new Promise<void>(res => this.callbacks.push(res));
        }
        return this.config!;
    }
}