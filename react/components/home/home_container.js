import {
    connect
} from 'react-redux';
import _ from 'lodash';

import Home from './home';

import * as ReviewActions from '../../actions/review_actions';
import * as ServiceActions from '../../actions/service_actions';

const mapStateToProps = (state, ownProps) => ({
    services: _.values(state.services),
    reviews: _.values(state.reviews)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllServices: () => dispatch(ServiceActions.getAllServices()),
    getAllReviews: () => dispatch(ReviewActions.getAllReviews())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);