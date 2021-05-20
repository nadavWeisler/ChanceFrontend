import { Dispatch } from "redux";
import axios from "axios";
import { EXPERIMENT_DATA_LINK } from "../../utils";
import { ExperimentAction, ExperimentActionTypes } from "../../types/experiment";

export const FetchExperiments = () => {
    return async (dispatch: Dispatch<ExperimentAction>) => {
        try {
            dispatch({ type: ExperimentActionTypes.FETCH_EXPERIMENTS })
            const response = await axios.get(EXPERIMENT_DATA_LINK)
            setTimeout(() => {
                dispatch({
                    type: ExperimentActionTypes.FETCH_EXPERIMENTS_SUCCESS,
                    payload: response.data
                })
            }, 500)
        } catch (e) {
            dispatch({
                type: ExperimentActionTypes.FETCH_EXPERIMENTS_ERROR,
                payload: 'ERROR: FETCH_EXPERIMENTS'
            })
        }
    }
}