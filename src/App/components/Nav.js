import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/messages'>Messages</Link>
                </li>
                <li>
                    <Link to='/users'>Users</Link>
                </li>
                <li>
                    <a href='#'>News</a>
                </li>
                <li>
                    <a href='#'>Music</a>
                </li>
                <li>
                    <a href='#'>Settings</a>
                </li>
            </ul>
        </nav>
    )
}