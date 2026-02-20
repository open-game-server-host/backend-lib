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