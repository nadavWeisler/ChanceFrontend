import { TrialProps } from "../types";

export interface Experiment {
    id: string;
    name: string;
    count: 0;
    trials: Array<TrialProps>;
}

export interface ExperimentState {
    experiments: Array<Experiment>;
    loading: boolean;
    error: null | string;
}
export enum ExperimentActionTypes {
    FETCH_EXPERIMENTS = 'FETCH_EXPERIMENTS',
    FETCH_EXPERIMENTS_SUCCESS = 'FETCH_EXPERIMENTS_SUCCESS',
    FETCH_EXPERIMENTS_ERROR = 'FETCH_EXPERIMENTS_ERROR',
}
interface FetchExperimentsAction {
    type: ExperimentActionTypes.FETCH_EXPERIMENTS;
}

interface FetchSuccessExperimentsAction {
    type: ExperimentActionTypes.FETCH_EXPERIMENTS_SUCCESS;
    payload: any[]
}

interface FetchExperimentsErrorAction {
    type: ExperimentActionTypes.FETCH_EXPERIMENTS_ERROR;
    payload: string;
}
export type ExperimentAction =
    FetchExperimentsAction | FetchExperimentsErrorAction | FetchSuccessExperimentsAction