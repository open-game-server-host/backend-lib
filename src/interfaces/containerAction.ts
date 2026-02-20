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
    container_id: string;
    user_id: string;
    action: ContainerActionType;
    data: string;
}