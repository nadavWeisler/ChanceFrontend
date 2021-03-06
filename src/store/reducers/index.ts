import {combineReducers} from "redux";
import { companyReducer } from "./companyReducer";
import { internshipReducer, CreateinternshipReducer } from "./internshipReducer";
import {getUserReducer, loginReducer, userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    companies: companyReducer,
    internships: internshipReducer, 
    createintership:  CreateinternshipReducer,
    login: loginReducer,
    getUser: getUserReducer,
})

export type RootState = ReturnType<typeof rootReducer>