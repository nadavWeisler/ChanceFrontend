import { LoginAction, UserAction, UserActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const LoginUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            dispatch({ type: UserActionTypes.LOGIN_USERS, email: email, password: password })
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let fd = new FormData();
            fd.append("email", email);
            fd.append("password", password)
            const response = await axios.post('http://127.0.0.1:4500/api/auth/login',
                fd, config)
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