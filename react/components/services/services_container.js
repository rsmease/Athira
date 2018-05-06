import {
    connect
} from 'react-redux';
import _ from 'lodash';

import ServicesIndex from './services_index';

import * as ServiceActions from '../../actions/service_actions';
import * as ImageCarouselActions from '../../actions/image_carousel_actions';

const mapStateToProps = (state, ownProps) => ({
    services: _.values(state.services),
    imageCarousel: _.values(state.imageCarousels).filter(imageCarousel => imageCarousel.location === 'services')
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllServices: () => dispatch(ServiceActions.getAllServices()),
    getAllCarouselImages: () => dispatch(ImageCarouselActions.getAllImageCarousels())
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesIndex);