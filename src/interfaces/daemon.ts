import { Ip } from "./ip";
import { Region } from "./region";

export interface Daemon extends SanitisedDaemon {
    apiKeyHash: string;
}

export interface SanitisedDaemon {
    createdAt: number;
    cpuArch: string;
    id: string;
    ipv4?: Ip;
    ipv6?: Ip;
    region: Region;
    segments: number;
    segmentsAvailable: number;
}

export function sanitiseDaemon(daemon: Daemon): SanitisedDaemon {
    return {
        cpuArch: daemon.cpuArch,
        createdAt: daemon.createdAt,
        id: daemon.id,
        ipv4: daemon.ipv4,
        ipv6: daemon.ipv6,
        region: daemon.region,
        segments: daemon.segments,
        segmentsAvailable: daemon.segmentsAvailable
    };
}