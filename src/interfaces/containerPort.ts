export interface ContainerPort {
    container_port: number;
    host_port: number;
}

export interface AssignedContainerPort extends ContainerPort {
    container_id: string;
}