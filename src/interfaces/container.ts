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
    ports: ContainerPort[];
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
    | "setName"
    | "resize"
    | "changeRegion"
    | "makeBackup"
;
export interface ContainerWithPermissions extends Container {
    userPermissions?: ContainerPermission[]; // If this is undefined, the user does not have any permission to access this container
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