import { Ip } from "./ip";
import { Region } from "./region";

export interface Daemon {
    cpu_arch: string;
    cpu_name: string;
    created_at: number;
    id: string;
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

export interface RawDaemon extends DaemonData {
    id: string;
}

export interface DaemonData {
    cpu_arch: string;
    cpu_name: string;
    created_at: number;
    ip_id: string;
    os: string;
    port_range_start: number;
    port_range_end: number;
    region_id: string;
    segments: number;
    segments_available: number;
    sftp_port: number;
    url: string;
    ws_url: string;
}