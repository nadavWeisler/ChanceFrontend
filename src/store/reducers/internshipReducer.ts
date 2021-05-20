import { InternshipAction, InternshipActionTypes, InternshipState } from "../../types/internship";

const initialState: InternshipState = {
    internships: [],
    loading: false,
    error: null
}

export const internshipReducer = (state = initialState, action: InternshipAction): InternshipState => {
    switch (action.type) {
        case InternshipActionTypes.FETCH_INTERNSHIP:
            return {loading: true, error: null, internships: []}
        case InternshipActionTypes.FETCH_INTERNSHIP_SUCCESS:
            return {loading: false, error: null, internships: action.payload}
        case InternshipActionTypes.FETCH_INTERNSHIP_ERROR:
            return {loading: false, error: action.payload, internships: []}
        default:
            return state
    }
}