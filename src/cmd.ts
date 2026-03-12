import { exec, execSync } from "child_process";

export function cmd(command: string, silent: boolean = false): string {
    const buffer = execSync(command);
    const output = buffer.toString();
    if (!silent) {
        console.log(output);
    }
    return output;
}

export async function asyncCmd(command: string, silent: boolean = false): Promise<string> {
    const child = exec(command);
    let output = "";
    child.stdout.on("data", chunk => output += chunk);
    child.stderr.on("data", chunk => output += chunk);
    if (!silent) {
        child.stdout?.pipe(process.stdout);
        child.stderr?.pipe(process.stderr);
    }
    return new Promise<string>((res, rej) => {
        child.on("exit", () => {
            child.removeAllListeners();
            res(output);
        });
        child.on("error", () => {
            child.removeAllListeners();
            rej();
        });
    });
}