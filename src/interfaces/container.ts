import { ContainerPort } from "./containerPort";
import { Daemon } from "./daemon";

export interface Container {
    appId: string;
    contractLengthDays: number;
    createdAt: number;
    daemon: Daemon;
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