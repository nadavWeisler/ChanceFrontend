import { LoginAction, LoginState, UserAction, UserActionTypes, UserState } from "../../types/user";

const initialUserState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialUserState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return { loading: true, error: null, users: [] }
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: action.payload }
        case UserActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, users: [] }
        default:
            return state
    }
}

const initialLoginState: LoginState = {
    access_token: ""
}

export const loginReducer = (state = initialLoginState, action: LoginAction): LoginState => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USERS:
            return { access_token: "" }
        case UserActionTypes.LOGIN_USERS_SUCCESS:
            return { access_token: action.payload }
        case UserActionTypes.LOGIN_USERS_ERROR:
            return { access_token: "" }
        default:
            return state
    }
} 