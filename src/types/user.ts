export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

export interface LoginState {
    access_token: string;
    user_id: string;
}

export interface GetUserState {
    user_name: string;
    email: string;
    rank: number;
    intern_candidate: Array<string>;
    intern_complete: Array<string>;
    intern_current: Array<string>;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
    LOGIN_USERS = 'LOGIN_USERS',
    LOGIN_USERS_SUCCESS = 'LOGIN_USERS_SUCCESS',
    LOGIN_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
    SIGNUP_USERS = 'SIGNUP_USERS',
    SIGNUP_USERS_SUCCESS = 'SIGNUP_USERS_SUCCESS',
    SIGNUP_USERS_ERROR = 'SIGNUP_USERS_ERROR',
    GET_USER_USERS = 'GET_USER_USERS',
    GET_USER_USERS_SUCCESS = 'GET_USER_USERS_SUCCESS',
    GET_USER_ERROR = 'GET_USER_ERROR',
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
    payload: any;
}
interface LoginUsersErrorAction {
    type: UserActionTypes.LOGIN_USERS_ERROR;
    payload: string;
}
export type LoginAction = LoginUserAction | LoginUsersErrorAction | LoginUserActionSuccess

interface SignupUserAction {
    type: UserActionTypes.SIGNUP_USERS;
    email: string;
    password: string;
}
interface SignupUserActionSuccess {
    type: UserActionTypes.SIGNUP_USERS_SUCCESS;
    payload: any[]
}
interface SignupUsersErrorAction {
    type: UserActionTypes.SIGNUP_USERS_ERROR;
    payload: string;
}
export type SignupAction = SignupUserAction | SignupUsersErrorAction | SignupUserActionSuccess

interface GetUserStartAction {
    type: UserActionTypes.GET_USER_USERS;
    user_id: string;
}

interface GetUserActionSuccess {
    type: UserActionTypes.GET_USER_USERS_SUCCESS;
    payload: GetUserState
}
interface GetUserErrorAction {
    type: UserActionTypes.GET_USER_ERROR;
    payload: string;
}

export type GetUserAction = GetUserStartAction | GetUserActionSuccess | GetUserErrorAction