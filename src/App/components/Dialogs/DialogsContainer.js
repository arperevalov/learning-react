import React from 'react';
import { connect } from 'react-redux';
import { currentDialogFieldUpdateActionCreator, sendMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (store) => {
    return {
        dialogPage: store.dialogPage,
        user: store.loggedUser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateDialogTextField : (text) => {
            dispatch(currentDialogFieldUpdateActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;