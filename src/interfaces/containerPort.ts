export interface ContainerPort {
    containerPort: number;
    hostPort: number;
}

export interface AssignedContainerPorts {
    containerId: string;
    ports: ContainerPort[];
}