export interface Internship {
    name: string;
    imgLink: string;
    company: string
    details: string;
}

export interface InternshipState {
    internships: Array<Internship>;
    loading: boolean;
    error: null | string;
}
export enum InternshipActionTypes {
    FETCH_INTERNSHIP = 'FETCH_INTERNSHIP',
    FETCH_INTERNSHIP_SUCCESS = 'FETCH_INTERNSHIP_SUCCESS',
    FETCH_INTERNSHIP_ERROR = 'FETCH_INTERNSHIP_ERROR',
}
interface FetchInternshipsAction {
    type: InternshipActionTypes.FETCH_INTERNSHIP;
}

interface FetchInternshipsSuccessAction {
    type: InternshipActionTypes.FETCH_INTERNSHIP_SUCCESS;
    payload: any[]
}

interface FetchInternshipsErrorAction {
    type: InternshipActionTypes.FETCH_INTERNSHIP_ERROR;
    payload: string;
}
export type InternshipAction =
    FetchInternshipsAction | FetchInternshipsSuccessAction | FetchInternshipsErrorAction