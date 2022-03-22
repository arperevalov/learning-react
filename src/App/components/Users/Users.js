import React from 'react';
import User from '../User/User';

let Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize),
        pages = []

        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }
        
    return <div>
        <h1>Users</h1>
        <ul className='pagination'>
            {
                pages.map(i => {return <li className={ props.currentPage === i ? 'active': ''} onClick={()=> {props.changingPage(i)}}>{i}</li>})
            }

        </ul>
        <div>{
            props.users.map(
                (user) => {
                    if (props.loggedUser.id != user.id) {
                        return <User name={user.name} photos={user.photos} id={user.id} key={user.id} status={user.status} country={user.country} city={user.city} followed={user.followed} loggedUser={props.loggedUser} unsubscribeUser={props.unsubscribeUser} subscribeUser={props.subscribeUser}/>
                    }
                }
            )
        }</div>
    </div>
}

export default Users