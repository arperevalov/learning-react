import React from 'react';
import User from './../../User/User';

export default function Message(props) {
    return (
        <div className='message'>
            <User name={props.name} id={props.id} />
            <div className='message__text'>
            {props.text}
            </div>
        </div>
    )
}