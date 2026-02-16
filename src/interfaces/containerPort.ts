export interface ContainerPort {
    container_port: number;
    host_port: number;
}

export interface AssignedContainerPorts {
    container_id: string;
    ports: ContainerPort[];
}