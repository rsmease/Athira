import {
    connect
} from 'react-redux';
import _ from 'lodash';

import About from './about';

import * as LeaderActions from '../../actions/leader_actions';
import * as CompanyActions from '../../actions/company_actions';
import * as ImageCarouselActions from '../../actions/image_carousel_actions';

const mapStateToProps = (state, ownProps) => ({
    leaders: _.values(state.leaders),
    company: _.values(state.companies)[0],
    imageCarousel: _.values(state.imageCarousels).filter(imageCarousel => imageCarousel.location === 'about')
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllLeaders: () => dispatch(LeaderActions.getAllLeaders()),
    getAllCompanies: () => dispatch(CompanyActions.getAllCompanies()),
    getAllImageCarousels: () => dispatch(ImageCarouselActions.getAllImageCarousels())
});

export default connect(mapStateToProps, mapDispatchToProps)(About);