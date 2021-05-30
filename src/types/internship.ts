export interface Internship {
    name: string;
    imgLink: string;
    company: string
    details: string;
}

export enum InternshipStatus {
    pending = "Pending",
    done = "Done",
    inProgress = "In Progress"
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
    CREATE_INTERNSHIP = 'CREATE_INTERNSHIP',
    CREATE_INTERNSHIP_SUCCESS = 'CREATE_INTERNSHIP_SUCCESS',
    CREATE_INTERNSHIP_ERROR = 'CREATE_INTERNSHIP_ERROR',
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

    interface CreateInternshipsAction {
        type: InternshipActionTypes.CREATE_INTERNSHIP;
    }
    
    interface CreateInternshipsSuccessAction {
        type: InternshipActionTypes.CREATE_INTERNSHIP_SUCCESS;
        payload: any[]
    }
    
    interface CreateInternshipsErrorAction {
        type: InternshipActionTypes.CREATE_INTERNSHIP_ERROR;
        payload: string;
    }
    export type CreateInternshipAction =
    CreateInternshipsAction | CreateInternshipsSuccessAction | CreateInternshipsErrorAction