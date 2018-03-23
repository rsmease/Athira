//utils

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import createStore from './store/store';

//components
import Header from './components/header';
import Footer from './components/footer';
import Home from './home';

const rootComponent = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <React.Fragment>
                <Route component={Header} />
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
                <Route component={Footer} />
            </React.Fragment >
        </HashRouter>
    </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore();
    const root = document.getElementById('root');
    ReactDOM.render(rootComponent(store), root);
});