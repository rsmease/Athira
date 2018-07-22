//utils
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import createStore from './store/store';

//components
import Header from './components/header';
import Footer from './components/footer_container';
import Home from './components/home/home_container';
import About from './components/about/about_container';
import ContactForm from './components/contact/contact_form_container';
import ServicesIndex from './components/services/services_container';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <React.Fragment>
                <Route component={Header} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={ServicesIndex} />
                    <Route exact path="/contact" component={ContactForm} />
                </Switch>
                <Route component={Footer} />
            </React.Fragment>
        </Router>
    </Provider >
)

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore();
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});
