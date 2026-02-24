import { ContainerPort } from "./containerPort";
import { SanitisedDaemon } from "./daemon";

export interface Container {
    appId: string;
    contractLengthDays: number;
    createdAt: number;
    daemon: SanitisedDaemon;
    free: boolean;
    id: string;
    locked: boolean;
    name: string;
    ipv4Ports: ContainerPort[];
    ipv6Ports: ContainerPort[];
    runtime: string;
    segments: number;
    terminateAt?: number;
    userId: string;
    variantId: string;
    versionId: string;
}

export type ContainerPermission =
    | "start"
    | "stop"
    | "kill"
    | "command"
    | "install"
    | "terminate"
    | "setRuntime"
;
export interface ContainerWithPermissions extends Container {
    user_permissions: ContainerPermission[];
}

export interface ContainerRegisterData extends ContainerAppData, ContainerPortsData {
    containerId: string;
    segments: number;
}

export interface ContainerAppData {
    appId: string;
    variantId: string;
    versionId: string;
}

export interface ContainerPortsData {
    ipv4Ports: ContainerPort[];
    ipv6Ports: ContainerPort[];
}