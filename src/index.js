import React from 'react';
import ReactDOM from 'react-dom';
import state from './App/redux/state';
import App from './App/App';
import {BrowserRouter} from 'react-router-dom';
import { newPost, newPostFieldUpdate, sendMessageToDialog, currentDialogTextFieldUpdate, subscribe } from './App/redux/state';

import 'normalize.css';
import './scss/App.scss'


const renderEntireTree = () => ReactDOM.render(
    <BrowserRouter>
        <App state={state} newPost={newPost} newPostFieldUpdate={newPostFieldUpdate} sendMessageToDialog={sendMessageToDialog} currentDialogTextFieldUpdate={currentDialogTextFieldUpdate} />
    </BrowserRouter>,
    document.getElementById(
        "app"
    )
);

renderEntireTree();

subscribe(renderEntireTree);

