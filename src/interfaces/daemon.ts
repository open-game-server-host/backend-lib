import { Ip } from "./ip";
import { Region } from "./region";

export interface Daemon {
    api_key_hash: string;
    created_at: number;
    id: string;
    setup_complete: boolean;
    cpu_arch?: string;
    cpu_name?: string;
    ip?: Ip;
    os?: string;
    port_range_start?: number;
    port_range_end?: number;
    region?: Region;
    segments?: number;
    segments_available?: number;
    sftp_port?: number;
    url?: string;
    ws_url?: string;
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