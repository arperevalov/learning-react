import React from 'react';
import User from '../User/User';
import Message from './Message';

export default function Dialogs() {
    return (
        <div className='dialogs'>
            <div className='dialogs__list'>
                <User name="Faggot Johnson"/>
                <User name="Faggot Robertson"/>
                <User name="Faggot Johnson"/>
                <User name="Faggot Robertson"/>
                <User name="Faggot Johnson"/>
                <User name="Faggot Robertson"/>
            </div>
            <div className='dialogs__active'>
                <div className='dialogs__messages'>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                <div className='dialogs__newMessage'>
                    <input/> 
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}