import * as ReviewsAJAX from '../ajax/reviews_ajax';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

export const getReview = (id) => (dispatch) => ReviewsAJAX.getReview(id)
    .then(review => dispatch(receiveReview(review)));

export const getAllReviews = () => (dispatch) => ReviewsAJAX.getAllReviews()
    .then(reviews => dispatch(receiveAllReviews(reviews)));