export interface User {
    id: string;
    auth_uid: string;
    created_at: number;
    permissions: string[];
}