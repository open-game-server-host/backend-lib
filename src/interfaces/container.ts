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
    ports: ContainerPortsData;
    runtime: string;
    segments: number;
    terminateAt?: number;
    userId: string;
    variantId: string;
    versionId: string;
}

export interface ContainerRegisterData extends ContainerAppData {
    containerId: string;
    segments: number;
    ports: ContainerPortsData;
}

export interface ContainerAppData {
    appId: string;
    variantId: string;
    versionId: string;
}

export interface ContainerPortsData {
    [ipVersion: number]:  ContainerPort[];
}