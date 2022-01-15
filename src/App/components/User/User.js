import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from "./Avatar";

export default function User(props) {

    return (
        <Link to={'/profile/'}>
            <div className='user'>
                <Avatar name={props.name}/>
                <span className='user__name'>
                    {props.name}</span>
            </div>
        </Link>
    )
}