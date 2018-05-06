import * as ImageCarouselsAJAX from '../ajax/image_carousels_ajax';

export const RECEIVE_IMAGE_CAROUSEL = 'RECEIVE_IMAGE_CAROUSEL';
export const RECEIVE_ALL_IMAGE_CAROUSELS = 'RECEIVE_ALL_IMAGE_CAROUSELS';

const receiveImageCarousel = (imageCarousel) => ({
    type: RECEIVE_IMAGE_CAROUSEL,
    imageCarousel
});

const receiveAllImageCarousels = (imageCarousels) => ({
    type: RECEIVE_ALL_IMAGE_CAROUSELS,
    imageCarousels
});

export const getImageCarousel = (id) => (dispatch) => ImageCarouselsAJAX.getImageCarousel(id)
    .then(imageCarousel => dispatch(receiveImageCarousel(imageCarousel)));

export const getAllImageCarousels = () => (dispatch) => ImageCarouselsAJAX.getAllImageCarousels()
    .then(imageCarousels => dispatch(receiveAllImageCarousels(imageCarousels)));