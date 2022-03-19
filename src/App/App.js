import React from 'react';
import {Route, Routes, useParams, useSearchParams, getState} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

export default function App(props) {
    
    return (
            <div className='container'>
                <Header/>
                <div className='inpage'>
                    <Nav/>
                    <div className='content'>
                        <Routes>
                            <Route exact path={"/messages"} element={<DialogsContainer store={props.store}/>}/>
                            <Route path="/profile" element={<ProfileContainer store={props.store}/>}/>
                            <Route path="/users" element={<UsersContainer store={props.store}/>}/>
                        </Routes>
                    </div>

                </div>
            </div>
    )
}