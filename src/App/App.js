import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile/Profile';

export default function App() {
    return (
            <div className='container'>
                <Header/>
                <div className='inpage'>
                    <Nav/>
                    <div className='content'>
                        <Routes>
                            <Route path="/messages" element={<Dialogs />}/>
                            <Route path="/profile" element={<Profile />}/>
                            <Route path="/" element={<Profile />}/>
                        </Routes>
                    </div>

                </div>
            </div>
    )
}