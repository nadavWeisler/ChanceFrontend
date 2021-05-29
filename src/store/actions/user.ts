import { GetUserAction, LoginAction, SignupAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";
import { BASE_URL, URLS, URL_TYPES } from "../api";

export const LoginUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({ type: UserActionTypes.LOGIN_USERS, email: email, password: password })
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let fd = new FormData();
            fd.append("email", email);
            fd.append("password", password);
            const response = await axios.post(BASE_URL + '/' + URL_TYPES.AUTH + '/' + URLS.LOGIN,
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
            const response = await axios.post(BASE_URL + '/' + URL_TYPES.AUTH + '/' + URLS.SIGNUP,
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

export const GetUser = (userId: string) => {
    return async (dispatch: Dispatch<GetUserAction>) => {
        try {
            dispatch({ type: UserActionTypes.GET_USER_USERS, user_id: userId })
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let fd = new FormData();
            fd.append("user_id", userId);
            const response = await axios.post(BASE_URL + '/' + URL_TYPES.PERSONAL_SPACE + '/' + URLS.STUDENT,
                fd, config);
            setTimeout(() => {
                dispatch({ type: UserActionTypes.GET_USER_USERS_SUCCESS, payload: response.data })
            }, 500)
        } catch (e) {
            dispatch({
                type: UserActionTypes.GET_USER_ERROR,
                payload: 'Fetch user error'
            })
        }
    }
}