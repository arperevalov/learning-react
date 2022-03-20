import * as axios from 'axios';
import React from 'react';
import User from '../User/User';

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users == 0) {
            let url = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
            axios.get(url).then(
                r=>{
                    this.props.setUsers(r.data.items)
                    this.props.changeTotalUsersCount(r.data.totalCount)
                }
            )
        }
    }

    changingPage(i) {
        let url = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${i}`
            axios.get(url).then(
                r=>{
                    this.props.setUsers(r.data.items)
                }
            )
        this.props.changePage(i);
    }
        
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize),
        pages = []

        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <h1>Users</h1>
            <ul className='pagination'>
                {
                    pages.map(i => {return <li className={ this.props.currentPage === i ? 'active': ''} onClick={()=> {this.changingPage(i)}}>{i}</li>})
                }

            </ul>
            <div>{
                this.props.users.map(
                    (user) => {
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