import { ContainerPort } from "./containerPort";
import { SanitisedDaemon } from "./daemon";

export interface Container extends ContainerAppData, ContainerPortsData{
    contractLengthDays: number;
    createdAt: number;
    daemon: SanitisedDaemon;
    free: boolean;
    id: string;
    locked: boolean;
    name: string;
    runtime: string;
    segments: number;
    terminateAt?: number;
    userId: string;
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
    ports: ContainerPorts;
}

export type ContainerPorts = {[ipVersion: number]: ContainerPort[]};