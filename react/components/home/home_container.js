import {
    connect
} from 'react-redux';
import _ from 'lodash';

import Home from './home';

import * as ReviewActions from '../../actions/review_actions';
import * as ServiceActions from '../../actions/service_actions';
import * as CompanyActions from '../../actions/company_actions';
import * as ImageCarouselActions from '../../actions/image_carousel_actions';
import {
    getAllImageCarousels
} from '../../actions/image_carousel_actions';

const mapStateToProps = (state, ownProps) => ({
    services: _.values(state.services),
    reviews: _.values(state.reviews),
    company: _.values(state.companies)[0],
    imageCarousel: _.values(state.imageCarousels).filter(imageCarousel => imageCarousel.location === "home")
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllServices: () => dispatch(ServiceActions.getAllServices()),
    getAllReviews: () => dispatch(ReviewActions.getAllReviews()),
    getAllCompanies: () => dispatch(CompanyActions.getAllCompanies()),
    getAllImageCarousels: () => dispatch(ImageCarouselActions.getAllImageCarousels())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);