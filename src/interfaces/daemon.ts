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
    ip: Ip;
    os: string;
    port_range_start: number;
    port_range_end: number;
    region: Region;
    segments: number;
    segments_available: number;
    setup_complete: boolean;
    sftp_port: number;
    url: string;
    ws_url: string;
}

export function sanitiseDaemon(daemon: Daemon): SanitisedDaemon {
    return {
        cpu_arch: daemon.cpu_arch,
        cpu_name: daemon.cpu_name,
        created_at: daemon.created_at,
        id: daemon.id,
        ip: daemon.ip,
        os: daemon.os,
        port_range_end: daemon.port_range_end,
        port_range_start: daemon.port_range_start,
        region: daemon.region,
        segments: daemon.segments,
        segments_available: daemon.segments_available,
        setup_complete: daemon.setup_complete,
        sftp_port: daemon.sftp_port,
        url: daemon.url,
        ws_url: daemon.ws_url
    };
}