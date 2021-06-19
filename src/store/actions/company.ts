import { Dispatch } from "redux";
import axios from "axios";
import { GET_COMPANY_LINK} from "../api";
import { CompanyAction, CompanyActionTypes } from "../../types/company";

export const FetchCompany = (token: string = "") => {
    return async (dispatch: Dispatch<CompanyAction>) => {
        try {
            dispatch({ type: CompanyActionTypes.FETCH_COMPANY })
            const response = await axios.get(GET_COMPANY_LINK,
                { headers: { "Authorization": `Bearer ${token}` }})
            setTimeout(() => {
                dispatch({
                    type: CompanyActionTypes.FETCH_COMPANY_SUCCESS,
                    payload: response.data,
                })
            }, 500)
        } catch (e) {
            dispatch({
                type: CompanyActionTypes.FETCH_COMPANY_ERROR,
                payload: 'ERROR: FETCH_COMPANIES'
            })
        }
    }
}