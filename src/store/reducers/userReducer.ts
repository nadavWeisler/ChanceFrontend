import { GetUserAction, GetUserState, LoginAction, LoginState, UserAction, UserActionTypes, UserState } from "../../types/user";

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
    access_token: "",
    user_id: ""
}

export const loginReducer = (state = initialLoginState, action: LoginAction): LoginState => {
    switch (action.type) {
        case UserActionTypes.LOGIN_USERS:
            return { access_token: "", user_id: "" }
        case UserActionTypes.LOGIN_USERS_SUCCESS:
            return { access_token: action.payload.access_token, user_id: action.payload.user_id }
        case UserActionTypes.LOGIN_USERS_ERROR:
            return { access_token: "", user_id: "" }
        default:
            return state
    }
}

const initialGetUserState: GetUserState = { email: "", intern_candidate: [], intern_complete: [], intern_current: [], rank: 0, user_name: "" }


export const getUserReducer = (state = initialGetUserState, action: GetUserAction): GetUserState => {
    switch (action.type) {
        case UserActionTypes.GET_USER_USERS:
            return { email: "", intern_candidate: [], intern_complete: [], intern_current: [], rank: 0, user_name: "" }
        case UserActionTypes.GET_USER_USERS_SUCCESS:
            return {
                user_name: action.payload.user_name,
                email: action.payload.email,
                rank: action.payload.rank,
                intern_candidate: action.payload.intern_candidate,
                intern_complete: action.payload.intern_complete,
                intern_current: action.payload.intern_current
            }
        case UserActionTypes.GET_USER_ERROR:
            return { email: "", intern_candidate: [], intern_complete: [], intern_current: [], rank: 0, user_name: "" }
        default:
            return state
    }
}