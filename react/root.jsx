import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import createStore from './store/store';

const rootComponent = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <h1>React is Still Runing</h1>
        </HashRouter>
    </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
    const store = createStore();
    const root = document.getElementById('root');
    ReactDOM.render(rootComponent(store), root);
});