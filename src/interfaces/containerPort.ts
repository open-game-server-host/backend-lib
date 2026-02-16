export interface ContainerPort {
    container_port: number;
    host_port: number;
}

export interface AssignedContainerPort {
    container_id: string;
    ports: ContainerPort[];
}