import React from 'react';
import { connect } from 'react-redux';
import { currentDialogFieldUpdate, sendMessage } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (store) => {
    return {
        dialogPage: store.dialogPage,
        user: store.auth
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    currentDialogFieldUpdate,
    sendMessage
}) (Dialogs);

export default DialogsContainer;