import React from 'react';
import {Route, Routes, useParams, useSearchParams} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile/Profile';

export default function App(props) {
    
    return (
            <div className='container'>
                <Header/>
                <div className='inpage'>
                    <Nav/>
                    <div className='content'>
                        <Routes>
                            <Route exact path={"/messages"} element={<Dialogs state={props.store.getState().dialogPage} user={props.store.getState().loggedUser} dispatch={props.dispatch}/>}/>
                            <Route path="/profile" element={<Profile state={props.store.getState().profilePage} user={props.store.getState().loggedUser} dispatch={props.dispatch}/>}/>
                        </Routes>
                    </div>

                </div>
            </div>
    )
}