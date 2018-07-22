import {
    connect
} from 'react-redux';
import _ from 'lodash';

import Footer from './footer';

import * as CompanyActions from '../../actions/company_actions';

const mapStateToProps = (state, ownProps) => ({
    company: _.values(state.companies)[0]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllCompanies: () => dispatch(CompanyActions.getAllCompanies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);