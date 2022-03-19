import * as axios from 'axios';
import React from 'react';
import User from '../User/User';

class Users extends React.Component {

    componentDidMount() {
        if (this.props.usersPage.users == 0) {
            let url = 'https://social-network.samuraijs.com/api/1.0/users'
            axios.get(url).then(
                r=>{
                    this.props.setUsers(r.data.items)
                }
            )
        }

    }
        
    render() {
        return <div>
            <h1>Users</h1>
            <div>{
                this.props.usersPage.users.map(
                    (user, key) => {
                        if (this.props.loggedUser.id != user.id) {
                            return <User name={user.name} photos={user.photos} id={user.id} key={user.id} status={user.status} country={user.country} city={user.city} followed={user.followed} loggedUser={this.props.loggedUser} unsubscribeUser={this.props.unsubscribeUser} subscribeUser={this.props.subscribeUser}/>
                        }
                    }
                )
            }</div>
        </div>
    }
}

export default Users