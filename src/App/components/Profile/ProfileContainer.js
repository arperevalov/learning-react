import React from 'react';
import Profile from './Profile'
import { newPostActionCreator, newPostFieldUpdateActionCreator } from '../../redux/profile-reducer';

export default function ProfileContainer(props) {

    let submitPost = () => {
        props.store.dispatch(newPostActionCreator())
    }
    
    let changeInfo = (text) => {
        props.store.dispatch(newPostFieldUpdateActionCreator(text))
    }
        
    return (
        <Profile state={props.store.getState().profilePage} user={props.store.getState().loggedUser} submitPost={submitPost} changeInfo={changeInfo}/>
    )
}