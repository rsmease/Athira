import {
    RECEIVE_ALL_IMAGE_CAROUSELS,
    RECEIVE_IMAGE_CAROUSEL
} from '../actions/image_carousel_actions';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_IMAGE_CAROUSEL:
            return _.merge({}, state, action.imageCarousel);
        case RECEIVE_ALL_IMAGE_CAROUSELS:
            return _.merge({}, state, action.imageCarousels);
        default:
            return state;
    }
}