import React from 'react';
import ReactDOM from 'react-dom';
// import state from './App/redux/state';
import {applyMiddleware} from 'redux'
import {store} from './App/redux/redux-store'
import App from './App/App';
import {BrowserRouter} from 'react-router-dom';

import 'normalize.css';
import './scss/App.scss'
import { Provider } from 'react-redux';

const renderEntireTree = () => ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById(
        "app"
    )
);

renderEntireTree(store);
