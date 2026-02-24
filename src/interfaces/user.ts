export interface User {
    id: string;
    authUid: string;
    createdAt: number;
    permissions: UserPermission[];
}

export type UserPermission =
    | "createContainer"

    | "createDaemon"
    | "listDaemons"
    | "removeDaemon"

    // TODO admin permissions
;