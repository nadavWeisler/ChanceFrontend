import { InternshipAction, InternshipActionTypes, InternshipState,CreateInternshipAction } from "../../types/internship";

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

export const CreateinternshipReducer = (state = initialState, action: CreateInternshipAction): InternshipState => {
    switch (action.type) {
        case InternshipActionTypes.CREATE_INTERNSHIP:
            return {loading: true, error: null, internships: []}
        case InternshipActionTypes.CREATE_INTERNSHIP_SUCCESS:
            return {loading: false, error: null, internships: action.payload}
        case InternshipActionTypes.CREATE_INTERNSHIP_ERROR:
            return {loading: false, error: action.payload, internships: []}
        default:
            return state
    }
}