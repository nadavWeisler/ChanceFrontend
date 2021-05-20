import { Dispatch } from "redux";
import axios from "axios";
import { GET_INTERNSHIP_DATA_LINK } from "../../utils/links";
import { InternshipAction, InternshipActionTypes } from "../../types/internship";

export const FetchInternships = () => {
    return async (dispatch: Dispatch<InternshipAction>) => {
        try {
            dispatch({ type: InternshipActionTypes.FETCH_INTERNSHIP })
            const response = await axios.get(GET_INTERNSHIP_DATA_LINK)
            setTimeout(() => {
                dispatch({
                    type: InternshipActionTypes.FETCH_INTERNSHIP_SUCCESS,
                    payload: response.data,
                })
            }, 500)
        } catch (e) {
            dispatch({
                type: InternshipActionTypes.FETCH_INTERNSHIP_ERROR,
                payload: 'ERROR: FETCH_INTERNSHIPS'
            })
        }
    }
}