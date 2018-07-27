import {
    RECEIVE_ALL_TERMS,
    RECEIVE_TERM
} from '../actions/term_actions';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_TERM:
            return _.merge({}, state, action.term);
        case RECEIVE_ALL_TERMS:
            return _.merge({}, state, action.terms);
        default:
            return state;
    }
}