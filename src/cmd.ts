import { exec, execSync } from "child_process";

export function cmd(command: string, silent: boolean = false): string {
    const buffer = execSync(command);
    const output = buffer.toString();
    if (!silent) {
        console.log(output);
    }
    return output;
}

export async function asyncCmd(command: string, silent: boolean = false) {
    const child = exec(command);
    if (!silent) {
        child.stdout?.pipe(process.stdout);
        child.stderr?.pipe(process.stderr);
    }
    await new Promise<void>((res, rej) => {
        child.on("exit", () => {
            child.removeAllListeners();
            res();
        });
        child.on("error", () => {
            child.removeAllListeners();
            rej();
        });
    });
}