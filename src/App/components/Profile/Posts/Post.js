import React from 'react';
import User from '../../User/User';

export default function Post(props) {
    return (
        <div className='post'>
            <User name={props.name}/>
            <p>{props.text}</p>
        </div>
    )
}