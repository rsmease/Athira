import * as TermsAJAX from '../ajax/terms_ajax';

export const RECEIVE_TERM = 'RECEIVE_TERM';
export const RECEIVE_ALL_TERMS = 'RECEIVE_ALL_TERMS';

const receiveTerm = (term) => ({
    type: RECEIVE_TERM,
    term
});

const receiveAllTerms = (terms) => ({
    type: RECEIVE_ALL_TERMS,
    terms
});

export const getTerm = (id) => (dispatch) => TermsAJAX.getTerm(id)
    .then(term => dispatch(receiveTerm(term)));

export const getAllTerms = () => (dispatch) => TermsAJAX.getAllTerms()
    .then(terms => dispatch(receiveAllTerms(terms)));