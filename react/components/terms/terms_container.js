import {
    connect
} from 'react-redux';
import _ from 'lodash';

import TermsIndex from './terms_index';

import * as TermActions from '../../actions/term_actions';

const mapStateToProps = (state, ownProps) => ({
    terms: _.values(state.terms)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllTerms: () => dispatch(TermActions.getAllTerms())
});

export default connect(mapStateToProps, mapDispatchToProps)(TermsIndex);