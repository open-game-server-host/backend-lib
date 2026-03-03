import { ContainerPort } from "./containerPort";
import { SanitisedDaemon } from "./daemon";

export interface Container extends ContainerPortsData {
    appId: string;
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
    ports: {
        [ip: string]: {
            ports: ContainerPort[];
            version: 4 | 6;
        }
    }
}