import {
    RECEIVE_ALL_COMPANIES,
    RECEIVE_COMPANY
} from '../actions/company_actions';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_COMPANY:
            return _.merge({}, state, action.company);
        case RECEIVE_ALL_COMPANIES:
            return _.merge({}, state, action.companies);
        default:
            return state;
    }
}