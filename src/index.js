import React from 'react';
import ReactDOM from 'react-dom';
// import state from './App/redux/state';
import {applyMiddleware} from 'redux'
import {store} from './App/redux/redux-store'
import App from './App/App';
import {BrowserRouter} from 'react-router-dom';

import 'normalize.css';
import './scss/App.scss'

const renderEntireTree = () => ReactDOM.render(
    <BrowserRouter>
        <App store={store} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById(
        "app"
    )
);

renderEntireTree(store);

store.subscribe(renderEntireTree);

