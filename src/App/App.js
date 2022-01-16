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
                            <Route exact path="/messages" element={<Dialogs 
                                                                    state={props.state.messagesPage}
                                                                    currentDialogTextFieldUpdate={props.currentDialogTextFieldUpdate}
                                                                    sendMessageToDialog={props.sendMessageToDialog}/>}/>
                            <Route path="/profile" element={<Profile 
                                                            state={props.state.profilePage} 
                                                            loggedUser={props.state.loggedUser} 
                                                            newPost={props.newPost}
                                                            newPostFieldUpdate={props.newPostFieldUpdate} />}/>
                        </Routes>
                    </div>

                </div>
            </div>
    )
}