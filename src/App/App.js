import React from 'react';
import {Route, Routes} from 'react-router-dom';
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
                            <Route exact path="/messages" element={<Dialogs messages={props.messages} dialogs={props.dialogs}/>}/>
                            <Route path="/profile" element={<Profile posts={props.posts} loggedUser={props.loggedUser} />}/>
                        </Routes>
                    </div>

                </div>
            </div>
    )
}