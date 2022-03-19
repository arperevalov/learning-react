import React from 'react';
import Users from './Users'
import { connect } from 'react-redux';
import { setUsersAC, subscribeUserAC, unsubscribeUserAC } from '../../redux/users-reducer';

let mapStateToProps = (store) => {
    return {
        usersPage: store.usersPage,
        loggedUser: store.loggedUser
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;