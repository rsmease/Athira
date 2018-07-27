import {
    connect
} from 'react-redux';
import _ from 'lodash';

import Footer from './footer';

import * as CompanyActions from '../actions/company_actions';
import * as TermActions from '../actions/term_actions';

const mapStateToProps = (state, ownProps) => ({
    company: _.values(state.companies)[0],
    terms: _.values(state.terms)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllCompanies: () => dispatch(CompanyActions.getAllCompanies()),
    getAllTerms: () => dispatch(TermActions.getAllTerms())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);