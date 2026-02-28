export function getGithubRawFileUrl(repo: string, branch: string, path: string): string {
    return `https://github.com/open-game-server-host/${repo}/raw/refs/heads/${branch}/${path}`;
}