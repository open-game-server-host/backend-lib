import { Ip } from "./ip";
import { Region } from "./region";

export interface Daemon extends SanitisedDaemon {
    apiKeyHash: string;
}

export interface SanitisedDaemon {
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

export function sanitiseDaemon(daemon: Daemon): SanitisedDaemon {
    return {
        cpuArch: daemon.cpuArch,
        cpuName: daemon.cpuName,
        createdAt: daemon.createdAt,
        id: daemon.id,
        ipv4: daemon.ipv4,
        ipv6: daemon.ipv6,
        os: daemon.os,
        ipv4PortRangeStart: daemon.ipv4PortRangeStart,
        ipv4PortRangeEnd: daemon.ipv4PortRangeEnd,
        ipv6PortRangeStart: daemon.ipv6PortRangeStart,
        ipv6PortRangeEnd: daemon.ipv6PortRangeEnd,
        region: daemon.region,
        segments: daemon.segments,
        segmentsAvailable: daemon.segmentsAvailable,
        setupComplete: daemon.setupComplete
    };
}