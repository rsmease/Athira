import {
    RECEIVE_ALL_LEADERS,
    RECEIVE_LEADER
} from '../actions/leader_actions';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_LEADER:
            return _.merge({}, state, action.leader);
        case RECEIVE_ALL_LEADERS:
            return _.merge({}, state, action.leaders);
        default:
            return state;
    }
}