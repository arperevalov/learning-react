import * as axios from 'axios';
import React from 'react';
import Users from './Users'
import { connect } from 'react-redux';
import { changePageAC, changeTotalUsersCountAC, setUsersAC, subscribeUserAC, unsubscribeUserAC } from '../../redux/users-reducer';

class UsersAPI extends React.Component {

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

    changingPage(pageNumber) {
        debugger
        let url = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
        axios.get(url).then(
            r=>{
                this.props.setUsers(r.data.items)
            }
        )
        this.props.changePage(pageNumber);
    }
        
    render() {return <Users changingPage = {this.changingPage}
                     totalUsersCount = {this.props.totalUsersCount}
                     pageSize = {this.props.pageSize}
                     currentPage = {this.props.currentPage}
                     users = {this.props.users}
                     loggedUser = {this.props.loggedUser}
                     subscribeUser = {this.props.subscribeUser}
                     unsubscribeUser = {this.props.unsubscribeUser}
    />
    }
}

let mapStateToProps = (store) => {
    return {
        users: store.usersPage.users,
        loggedUser: store.loggedUser,
        totalUsersCount: store.usersPage.totalUsersCount,
        pageSize: store.usersPage.pageSize,
        currentPage: store.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        unsubscribeUser: (user) => {
            dispatch(unsubscribeUserAC(user))
        },
        subscribeUser: (user) => {
            dispatch(subscribeUserAC(user))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        changePage: (currentPage) => {
            dispatch(changePageAC(currentPage))
        },
        changeTotalUsersCount: (totalUsersCount) => {
            dispatch(changeTotalUsersCountAC(totalUsersCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (UsersAPI)

export default UsersContainer;