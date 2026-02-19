import { Ip } from "./ip";
import { Region } from "./region";

export interface Daemon extends SanitisedDaemon {
    api_key_hash: string;
}

export interface SanitisedDaemon extends SetupIncompleteDaemon {
    cpu_arch: string;
    cpu_name: string;
    ip: Ip;
    os: string;
    port_range_start: number;
    port_range_end: number;
    region: Region;
    segments: number;
    segments_available: number;
    sftp_port: number;
    url: string;
    ws_url: string;
}

export interface SetupIncompleteDaemon {
    created_at: number;
    id: string;
    setup_complete: boolean;
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

export interface RawDaemon extends DaemonData {
    id: string;
}

export interface DaemonData {
    api_key_hash: string;
    created_at: number;
    setup_complete: boolean;
    cpu_arch?: string;
    cpu_name?: string;
    ip_id?: string;
    os?: string;
    port_range_start?: number;
    port_range_end?: number;
    region_id?: string;
    segments?: number;
    segments_available?: number;
    sftp_port?: number;
    url?: string;
    ws_url?: string;
}