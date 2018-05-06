import {
    combineReducers
} from 'redux';

import servicesReducer from './services_reducer';
import reviewsReducer from './reviews_reducer';
import companiesReducer from './companies_reducer';
import leadersReducer from './leaders_reducer';
import imageCarouselsReducer from './image_carousels_reducer';

export default combineReducers({
    services: servicesReducer,
    reviews: reviewsReducer,
    leaders: leadersReducer,
    companies: companiesReducer,
    imageCarousels: imageCarouselsReducer
});