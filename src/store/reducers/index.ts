import {combineReducers} from "redux";
import { internshipReducer } from "./internshipReducer";
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    internships: internshipReducer
})

export type RootState = ReturnType<typeof rootReducer>