import {combineReducers} from "redux";
import { experimentReducer } from "./experimentReducer";
import {userReducer} from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    experiment: experimentReducer
})

export type RootState = ReturnType<typeof rootReducer>