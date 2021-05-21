import {combineReducers} from "redux";
import { internshipReducer } from "./internshipReducer";
import {loginReducer, userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    internships: internshipReducer,
    login: loginReducer
})

export type RootState = ReturnType<typeof rootReducer>