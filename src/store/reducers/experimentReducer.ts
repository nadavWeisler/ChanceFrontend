import { ExperimentAction, ExperimentActionTypes, ExperimentState } from "../../types/experiment";

const initialState: ExperimentState = {
    experiments: [],
    loading: false,
    error: null
}

export const experimentReducer = (state = initialState, action: ExperimentAction): ExperimentState => {
    switch (action.type) {
        case ExperimentActionTypes.FETCH_EXPERIMENTS:
            return {loading: true, error: null, experiments: []}
        case ExperimentActionTypes.FETCH_EXPERIMENTS_SUCCESS:
            return {loading: false, error: null, experiments: action.payload}
        case ExperimentActionTypes.FETCH_EXPERIMENTS_ERROR:
            return {loading: false, error: action.payload, experiments: []}
        default:
            return state
    }
}