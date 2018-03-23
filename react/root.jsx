import React from 'react';
import ReactDOM from 'react-dom';

import * as REVIEW from './ajax/reviews_ajax';
import * as SERVICE from './ajax/services_ajax';

document.addEventListener('DOMContentLoaded', () => {
    window.getReview = REVIEW.getReview;
    const root = document.getElementById('root');
    ReactDOM.render(<h1>React is Running</h1>, root);
});