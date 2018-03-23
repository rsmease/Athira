import React from 'react';
import ReactDOM from 'react-dom';

import * as REVIEW from './actions/review_actions';
import * as SERVICE from './actions/service_actions';

document.addEventListener('DOMContentLoaded', () => {
    window.getReview = REVIEW.getReview;
    window.getAllReviews = REVIEW.getAllReviews;
    window.getService = SERVICE.getService;
    window.getAllServices = SERVICE.getAllServices;

    const root = document.getElementById('root');
    ReactDOM.render(<h1>React is Running</h1>, root);
});