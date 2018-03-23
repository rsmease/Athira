import {
    combineReducers
} from 'redux';

import servicesReducer from './services_reducer';
import reviewsReducer from './reviews_reducer';

export default combineReducers({
    services: servicesReducer,
    reviews: reviewsReducer
});