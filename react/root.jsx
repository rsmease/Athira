import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore();


    const root = document.getElementById('root');
    ReactDOM.render(<h1>React is Running</h1>, root);
});