import { Ip } from "./ip";
import { Region } from "./region";

export interface Daemon {
    api_key_hash: string;
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
    setup_complete: boolean;
    sftp_port: number;
    url: string;
    ws_url: string;
}

export interface RawDaemon extends DaemonData {
    id: string;
}

export interface DaemonData {
    api_key_hash: string;
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
    setup_complete: boolean; // The api key needs to be generated and given to the daemon during its setup, which means a record is created before it's ready.
    sftp_port: number;
    url: string;
    ws_url: string;
}