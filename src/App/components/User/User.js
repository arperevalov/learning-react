import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from "./Avatar";

export default function User(props) {
    const UserStatus = () => {
        if (props.status) {
            return <div> {props.status}</div>
        } else {
            return false
        }
    }

    const UserLocation = () => {
        if (props.country) {
            if(props.city) {
                return <span className='location'> {props.country + ', ' + props.city} </span>
            } else {
                return <span className='location'> {props.country} </span>
            }
        } else {
            return false
        }
    }

    const IsFollowed = () => {
        if (props.followed != undefined) {
            if (props.followed) {
                return <div className='follow' onClick={unsubscribe}>Unsub</div>
            } else {
                return <div className='follow' onClick={subscribe}>Sub</div>
            }
        } else {
            return false
        }
    }

    const unsubscribe = (e) => {
        e.preventDefault()
        props.unsubscribeUser(props.id)
    }

    const subscribe = (e) => {
        e.preventDefault()
        props.subscribeUser(props.id)
    }

    return (
        <NavLink to={`/profile/${props.id}`}>
            <div>
                <div className='user'>
                    <Avatar name={props.name} photos={props.photos}/>
                    <span className='user__name'>
                        {props.name}</span>
                    <div className='additional'>
                        <UserStatus />
                        <UserLocation />
                        <IsFollowed/>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

// {user.status} country={user.country} city={user.city}