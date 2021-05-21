import { Dispatch } from "redux";
import axios from "axios";
import { GET_INTERNSHIP_DATA_LINK } from "../../utils/links";
import { InternshipAction,CreateInternshipAction, InternshipActionTypes } from "../../types/internship";

export const FetchInternships = (token: string = "") => {
    return async (dispatch: Dispatch<InternshipAction>) => {
        try {
            dispatch({ type: InternshipActionTypes.FETCH_INTERNSHIP })
            const response = await axios.get(GET_INTERNSHIP_DATA_LINK,
                { headers: { "Authorization": `Bearer ${token}` }})
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


export const CreateInternships = (user_id: string, project_name: string, duration: string, due_date: string, last_application_date: string,
    difficulty: string, field: string, tags: string, description: string) => {
    return async (dispatch: Dispatch<CreateInternshipAction>) => {
        try {
            dispatch({ type: InternshipActionTypes.CREATE_INTERNSHIP })
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
            let fd = new FormData();
            fd.append("user_id", user_id);
            fd.append("project_name",project_name);
            fd.append("duration", duration);
            fd.append("due_date", due_date);
            fd.append("last_application_date", last_application_date);
            fd.append("dificulty", difficulty);
            fd.append("field", field);
            fd.append("tags", tags);
            fd.append("description", description);
            const response = await axios.post('http://127.0.0.1:4500/api/personalSpace/company',
            fd, config);
            setTimeout(() => {
                dispatch({
                    type: InternshipActionTypes.CREATE_INTERNSHIP_SUCCESS,
                    payload: response.data,
                })
            }, 500)
        } catch (e) {
            dispatch({
                type: InternshipActionTypes.CREATE_INTERNSHIP_ERROR,
                payload: 'ERROR: FETCH_INTERNSHIPS'
            })
        }
    }
}