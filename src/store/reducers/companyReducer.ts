import { CompanyAction, CompanyActionTypes, CompanyState } from "../../types/company"

const initialCompanyState: CompanyState = {
    companies: [],
    error: "",
    loading: false
}

export const companyReducer = (state = initialCompanyState, action: CompanyAction): CompanyState => {
    switch (action.type) {
        case CompanyActionTypes.FETCH_COMPANY:
            return { loading: true, error: null, companies: [] }
        case CompanyActionTypes.FETCH_COMPANY_SUCCESS:
            return { loading: false, error: null, companies: action.payload }
        case CompanyActionTypes.FETCH_COMPANY_ERROR:
            return { loading: false, error: action.payload, companies: [] }
        default:
            return state
    }
}