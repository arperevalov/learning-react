import React from 'react';
import {Link} from 'react-router-dom';
import DialogListItem from './DialogListItem';
import Message from './Message/Message';

export default function Dialogs(props) {

    let DisplayDialogsList = props
        .dialogs
        .map((d, key) => <DialogListItem name={d.name} id={d.id} key={key}/>)

    let DisplayMessagesList = props
        .messages
        .map((m, key) => <Message name={m.name} id={m.id} key={key} text={m.text}/>)

        
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
                    <input/>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}