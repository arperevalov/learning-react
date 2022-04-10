import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { HeaderContainer } from './components/Header/HeaderContainer';

export default function App(props) {
    
    return (
            <div className='container'>
                <HeaderContainer/>
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