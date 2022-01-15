import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {BrowserRouter} from 'react-router-dom';

import 'normalize.css';
import './scss/App.scss'

let dialogs = [
    {
        id: 123,
        name: "Robert Johnson"
    }, {
        id: 123,
        name: "Robert Robertson"
    }, {
        id: 123,
        name: "Robert Swanson"
    }, {
        id: 123,
        name: "Robert Dawson"
    }
]

let messages = [
    {
        id: 123,
        name: "Robert Johnson",
        text: "Lorem ipsum dolor sit amet."
    }, {
        id: 123,
        name: "Robert Robertson",
        text: "Lorem ipsum dolor sit amet."
    }, {
        id: 123,
        name: "Robert Swanson",
        text: "Lorem ipsum dolor sit amet."
    }, {
        id: 123,
        name: "Robert Dawson",
        text: "Lorem ipsum dolor sit amet."
    }
]

let posts = [
    {
        id: 123,
        text: "Lorem ipsum dolor sit amet."
    }, {
        id: 123,
        text: "Lorem ipsum dolor sit amet."
    }, {
        id: 123,
        text: "Lorem ipsum dolor sit amet."
    }, {
        id: 123,
        text: "Lorem ipsum dolor sit amet."
    }
]

let loggedUser = {
    name: 'Jason Biggs'
}


ReactDOM.render(
    <BrowserRouter>
        <App dialogs={dialogs} messages={messages} posts={posts} loggedUser={loggedUser}/>
    </BrowserRouter>,
    document.getElementById(
        "app"
    )
);



