import { LoginAction, SignupAction, UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const LoginUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({ type: UserActionTypes.LOGIN_USERS, email: email, password: password })
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let fd = new FormData();
            fd.append("email", email);
            fd.append("password", password);
            const response = await axios.post('http://127.0.0.1:4500/api/auth/login',
                fd, config);
            setTimeout(() => {
                dispatch({ type: UserActionTypes.LOGIN_USERS_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({
                type: UserActionTypes.LOGIN_USERS_ERROR,
                payload: 'Fetch user error'
            })
        }
    }
}

export const SignupUser = (email: string, password: string, userType: string, name: string,
     companyName: string) => {
    return async (dispatch: Dispatch<SignupAction>) => {
        try {
            dispatch({ type: UserActionTypes.SIGNUP_USERS, email: email, password: password })
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let fd = new FormData();
            fd.append("email", email);
            fd.append("password", password);
            fd.append("user_type", userType);
            fd.append("name", name);
            fd.append("companyName", companyName);
            const response = await axios.post('http://127.0.0.1:4500/api/auth/signup',
                fd, config);
            setTimeout(() => {
                dispatch({ type: UserActionTypes.SIGNUP_USERS_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({
                type: UserActionTypes.SIGNUP_USERS_ERROR,
                payload: 'Fetch user error'
            })
        }
    }
}