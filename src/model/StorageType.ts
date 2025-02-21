

export interface ObjectResponse<T> {
    error: boolean;
    errorDescription: string;
    data: T | null;
}

export interface ListResponse<T> {
    error: boolean;
    errorDescription: string;
    data: T[];
    listCount: number;
    pageCount: number;
    recordCount: number;
}

export interface Storage {
    id: string;
    isFolder: boolean;
    name: string;
    extension?: string;
    image?: string;
    created: Date;
    creator: string;
    modifyDate: Date;
    modifier?: string;
    deleted: boolean;
    deletedDate?: Date;
    userDeleter?: string;
    readOnly: boolean;
    visible: boolean;
    locked: boolean;
    restrictedByPerm: boolean;
    status?: number;
    clazzName?: string;
    level: number;
    description?: string;
    key?: string;
    path: string;
    extraData?: string;
    assigned?: string;
    assignable: boolean;
    assignedFrom?: Date;
    assignedTo?: Date;
    type: number;
    order: number;
    permissions?: Perm[];
}

export interface Perm {
    id: string;
    user: string;
    canAdmin: boolean;
    canCreate: boolean;
    canRead: boolean;
    canUpdate: boolean;
    canDelete: boolean;
}
