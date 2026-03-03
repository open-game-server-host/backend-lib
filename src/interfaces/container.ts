import { ContainerPort } from "./containerPort";

export interface Container {
    appId: string;
    contractLengthDays: number;
    createdAt: number;
    daemonId: string;
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
    ports: ContainerPort[];
}