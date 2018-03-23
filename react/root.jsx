//utils

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import createStore from './store/store';

//components
import Header from './components/header';

const rootComponent = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Route path="/" component={Header} />
        </HashRouter>
    </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore();
    const root = document.getElementById('root');
    ReactDOM.render(rootComponent(store), root);
});