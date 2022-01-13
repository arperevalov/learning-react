import React from 'react';
import Avatar from "./Avatar";

export default function User(props) {
    return (
        <div className='user'>
            <Avatar name={props.name}/>
            <span className='user__name'>
                {props.name}</span>
        </div>
    )
}