export enum ActionType {
    LOGOUT = 'LOGOUT',
}

export class Logout {
    readonly type = ActionType.LOGOUT;
}

export type AuthAction = Logout