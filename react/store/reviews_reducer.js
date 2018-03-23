import {
    RECEIVE_ALL_REVIEWS,
    RECEIVE_REVIEW
} from '../actions/review_actions';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_REVIEW:
            return _.merge({}, state, action.review);
        case RECEIVE_ALL_REVIEWS:
            return _.merge({}, state, action.reviews);
        default:
            return state;
    }
}