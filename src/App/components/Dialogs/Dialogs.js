import React from 'react';
import { currentDialogFieldUpdateActionCreator, sendMessageActionCreator } from '../../redux/dialog-reducer';
import DialogListItem from './DialogListItem';
import Message from './Message/Message';

export default function Dialogs(props) {

    let DisplayDialogsList = props
        .state
        .dialogs
        .map((d, key) => <DialogListItem name={d.name} id={d.id} lastMessage={d.lastMessage} key={key}/>)

    let DisplayMessagesList = props
        .state
        .messages
        .map((m, key) => <Message name={m.name} id={m.id} key={key} text={m.text}/>)

    let dialogField = React.createRef()

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let updateDialogTextField = () => {
        props.dispatch(currentDialogFieldUpdateActionCreator(dialogField.current.value))
    }

        
    return (
        <div className='dialogs'>
            <div className='dialogs__list'>
                {DisplayDialogsList}
            </div>
            <div className='dialogs__active'>
                <div className='dialogs__messages'>
                    {DisplayMessagesList}
                </div>
                <div className='dialogs__newMessage'>
                    <input value={props.state.currentDialogTextField} ref={dialogField} onChange={updateDialogTextField}/>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}