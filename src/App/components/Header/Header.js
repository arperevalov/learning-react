import React from 'react';

export default function Header(props) {
    return (
        <header className='header'>Social<br/>
        {props.isAuth ? props.name : 'Нет логина'}
        </header>
    )
}