export type ContainerActionType =
    | "create"
    | "start"
    | "stop"
    | "restart"
    | "kill"
    | "install"
    | "command"
    | "terminate"
;

export interface ContainerAction {
    id: string;
    containerId: string;
    userId: string;
    action: ContainerActionType;
    data: string;
}