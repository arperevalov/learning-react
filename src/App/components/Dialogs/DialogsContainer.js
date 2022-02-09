import React from 'react';
import { currentDialogFieldUpdateActionCreator, sendMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

export default function DialogsContainer(props) {

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let updateDialogTextField = (text) => {
        props.store.dispatch(currentDialogFieldUpdateActionCreator(text))
    }
    
        
    return (
        
        <Dialogs state={props.store.getState().dialogPage} user={props.store.getState().loggedUser} updateDialogTextField={updateDialogTextField} sendMessage={sendMessage}/>
    )
}