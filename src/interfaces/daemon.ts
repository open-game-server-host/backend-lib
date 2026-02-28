import { Ip } from "./ip";
import { Region } from "./region";

export interface Daemon {
    apiKeyHash: string;
    createdAt: number;
    cpuArch: string;
    cpuName: string;
    id: string;
    ipv4?: Ip;
    ipv6?: Ip;
    os: string;
    ipv4PortRangeStart?: number;
    ipv4PortRangeEnd?: number;
    ipv6PortRangeStart?: number;
    ipv6PortRangeEnd?: number;
    region: Region;
    segments: number;
    segmentsAvailable: number;
    setupComplete: boolean;
}

export interface SanitisedDaemon {
    createdAt: number;
    cpuArch?: string;
    id: string;
    ipv4?: Ip;
    ipv6?: Ip;
    region?: Region;
    setupComplete: boolean;
}

export function sanitiseDaemon(daemon: Partial<Daemon>): SanitisedDaemon {
    return {
        cpuArch: daemon.cpuArch,
        createdAt: daemon.createdAt,
        id: daemon.id,
        ipv4: daemon.ipv4,
        ipv6: daemon.ipv6,
        region: daemon.region,
        setupComplete: daemon.setupComplete
    };
}