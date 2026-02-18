import { ContainerPort } from "./containerPort";
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
    ports: ContainerPort[];
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

export interface CreateContainerData {
    app_id: string;
    free: boolean;
    name: string;
    runtime: string;
    segments: number;
    user_id: string;
    variant_id: string;
    version_id: string;
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
    container_id: string;
    user_id: string;
    action: ContainerActionType;
    data: string;
}