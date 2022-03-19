import * as axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = (props) => {

    let [users,setUsers] = useState(props.usersPage.users)

    useEffect(()=>{
        // if (users == 0) {
            let url = 'https://social-network.samuraijs.com/api/1.0/users'
            axios.get(url).then(
                r=>{
                    setUsers(r.data.items)
                    props.setUsers(r.data.items)
                }
            )
        // }
    }, [])

    return <div>
            <h1>Users</h1>
            <div>{
                users.map(
                    (user, key) => {
                        if (props.loggedUser.id != user.id) {
                            return <User name={user.name} photos={user.photos} id={user.id} key={user.id} status={user.status} country={user.country} city={user.city} followed={user.followed} loggedUser={props.loggedUser} unsubscribeUser={props.unsubscribeUser} subscribeUser={props.subscribeUser}/>
                        }
                    }
                )
            }</div>
        </div>
}

export default Users