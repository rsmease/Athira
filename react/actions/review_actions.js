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

export const fetchReview = (id) => (dispatch) => ReviewsAJAX.fetchReview(id)
    .then(fetchedReview => dispatch(receiveReview(fetchedReview)));

export const fetchAllReviews = () => (dispatch) => ReviewsAJAX.fetchAllReviews()
    .then(fetchedReviews => dispatch(receiveAllReviews(fetchedReviews)));