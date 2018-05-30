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
import Contact from './components/contact/contact';
import ServicesIndex from './components/services/services_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
            <React.Fragment>
                <Route component={Header} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={ServicesIndex} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                <Route component={Footer} />
            </React.Fragment>
        </HashRouter>
    </Provider >
)

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
