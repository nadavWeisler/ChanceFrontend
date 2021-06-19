import { Internship } from "./internship";

export interface CompanyState {
    companies: Array<Company>;
    loading: boolean;
    error: null | string;
}

export interface Company {
        userName: string;
        imgLink: string;
        companyName: string
        internships: Array<Internship>;    
}

export enum CompanyActionTypes {
    FETCH_COMPANY = 'FETCH_COMPANY',
    FETCH_COMPANY_SUCCESS = 'FETCH_COMPANY_SUCCESS',
    FETCH_COMPANY_ERROR = 'FETCH_COMPANY_ERROR',
}

interface FetchCompanyAction {
    type: CompanyActionTypes.FETCH_COMPANY;
}

interface FetchCompanySuccessAction {
    type: CompanyActionTypes.FETCH_COMPANY_SUCCESS;
    payload: any[]
}

interface FetchCompanyErrorAction {
    type: CompanyActionTypes.FETCH_COMPANY_ERROR;
    payload: string;
}

export type CompanyAction = FetchCompanyAction | FetchCompanySuccessAction | FetchCompanyErrorAction