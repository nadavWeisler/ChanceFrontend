export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export interface LoginState {
    access_token: string;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
    LOGIN_USERS = 'LOGIN_USERS',
    LOGIN_USERS_SUCCESS = 'LOGIN_USERS_SUCCESS',
    LOGIN_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
    email: string;
    password: string;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
export type UserAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction

interface LoginUserAction {
    type: UserActionTypes.LOGIN_USERS;
    email: string;
    password: string;
}
interface LoginUserActionSuccess {
    type: UserActionTypes.LOGIN_USERS_SUCCESS;
    payload: any[]
}
interface LoginUsersErrorAction {
    type: UserActionTypes.LOGIN_USERS_ERROR;
    payload: string;
}
export type LoginAction = LoginUserAction | LoginUsersErrorAction | LoginUserActionSuccess