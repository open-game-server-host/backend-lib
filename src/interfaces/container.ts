import { Daemon } from "./daemon";

export interface Container {
    app_id: string;
    contract_length_days: number;
    created_at: number;
    daemon: Daemon;
    free: boolean;
    id: string;
    locked: boolean;
    name: string;
    ports: {
        
    }
    runtime: string;
    segments: number;
    terminate_at?: number;
    user_id: string;
    variant_id: string;
    version_id: string;
}

export interface RawContainer extends ContainerData {
    id: string;
}

export interface ContainerData {
    app_id: string;
    contract_length_days: number;
    created_at: number;
    daemon_id: string;
    free: boolean;
    locked: boolean;
    name: string;
    runtime: string;
    segments: number;
    terminate_at?: number;
    user_id: string;
    variant_id: string;
    version_id: string;
}

export interface ContainerPort {
    containerPort: number;
    hostPort: number;
}

export type ContainerActionType =
    | "create"
    | "start"
    | "stop"
    | "restart"
    | "kill"
    | "install"
    | "command"
    | "terminate"
;

export interface ContainerAction {
    id: string;
    containerId: string;
    userId: string;
    action: ContainerActionType;
    data: string;
}