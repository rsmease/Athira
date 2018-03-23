import {
    RECEIVE_ALL_SERVICES,
    RECEIVE_SERVICE
} from '../actions/service_actions';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_SERVICE:
            return _.merge({}, state, action.service);
        case RECEIVE_ALL_SERVICES:
            return _.merge({}, state, action.services);
        default:
            return state;
    }
}