import { Ip } from "./ip";
import { Region } from "./region";

export interface Daemon extends SanitisedDaemon {
    api_key_hash: string;
}

export interface SanitisedDaemon {
    created_at: number;
    cpu_arch: string;
    cpu_name: string;
    id: string;
    ipv4?: Ip;
    ipv6?: Ip;
    os: string;
    ipv4_port_range_start?: number;
    ipv4_port_range_end?: number;
    ipv6_port_range_start?: number;
    ipv6_port_range_end?: number;
    region: Region;
    segments: number;
    segments_available: number;
    setup_complete: boolean;
    sftp_port: number;
}

export function sanitiseDaemon(daemon: Daemon): SanitisedDaemon {
    return {
        cpu_arch: daemon.cpu_arch,
        cpu_name: daemon.cpu_name,
        created_at: daemon.created_at,
        id: daemon.id,
        ipv4: daemon.ipv4,
        ipv6: daemon.ipv6,
        os: daemon.os,
        ipv4_port_range_start: daemon.ipv4_port_range_start,
        ipv4_port_range_end: daemon.ipv4_port_range_end,
        ipv6_port_range_start: daemon.ipv6_port_range_start,
        ipv6_port_range_end: daemon.ipv6_port_range_end,
        region: daemon.region,
        segments: daemon.segments,
        segments_available: daemon.segments_available,
        setup_complete: daemon.setup_complete,
        sftp_port: daemon.sftp_port
    };
}