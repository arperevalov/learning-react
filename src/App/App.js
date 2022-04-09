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
                            <Route exact path={"/messages"} element={<DialogsContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path='/profile/:id' element={<ProfileContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                        </Routes>
                    </div>

                </div>
            </div>
    )
}