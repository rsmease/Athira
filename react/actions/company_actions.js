import * as CompaniesAJAX from '../ajax/companies_ajax';

export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';
export const RECEIVE_ALL_COMPANIES = 'RECEIVE_ALL_COMPANIES';

const receiveCompany = (company) => ({
    type: RECEIVE_COMPANY,
    company
});

const receiveAllCompanies = (companies) => ({
    type: RECEIVE_ALL_COMPANIES,
    companies
});

export const getCompany = (id) => (dispatch) => CompaniesAJAX.getCompany(id)
    .then(company => dispatch(receiveCompany(company)));

export const getAllCompanies = () => (dispatch) => CompaniesAJAX.getAllCompanies()
    .then(companies => dispatch(receiveAllCompanies(companies)));