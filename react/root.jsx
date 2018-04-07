//utils

import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import createStore from './store/store';

//components
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home/home_container';
import About from './components/about/about_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <React.Fragment>
                <Route component={Header} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
                <Route component={Footer} />
            </React.Fragment>
        </HashRouter>
    </Provider >
)

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore();
    console.log(store);
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});