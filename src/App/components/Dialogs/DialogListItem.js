import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from "./../User/Avatar";

export default function DialogListItem(props) {

    return (
        <Link to={'/messages/' + props.id}>
            <div className='user'>
                <div className='user__wrap'>
                    <Avatar name={props.name}/>
                    <span className='user__name'>{props.name}</span>
                </div>
                <span className='user__lastMessage'>{props.lastMessage}</span>
            </div>

        </Link>
    )
}