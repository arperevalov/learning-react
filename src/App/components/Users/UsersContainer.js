import React from 'react';
import Users from './Users'
import { connect } from 'react-redux';
import { changePageAC, changeTotalUsersCountAC, setUsersAC, subscribeUserAC, unsubscribeUserAC } from '../../redux/users-reducer';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;