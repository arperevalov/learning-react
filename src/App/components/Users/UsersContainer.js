import * as axios from 'axios';
import React, { useEffect } from 'react';
import Users from './Users'
import { connect } from 'react-redux';
import { changePage, changeTotalUsersCount, setUsers, subscribeUser, unsubscribeUser, setFetching } from '../../redux/users-reducer';
import Preloader from '../Preloader';

const UsersAPI = props => {

    useEffect(()=>{
        if (props.users == 0) {
            props.setFetching(true)
            let url = `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`
            axios.get(url).then(
                r=>{
                    props.setUsers(r.data.items)
                    props.changeTotalUsersCount(r.data.totalCount)
                    props.setFetching(false)
                }
            )
        }
    },[])

    const changingPage = (pageNumber) => {
        props.setFetching(true)
        let url = `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${pageNumber}`
        axios.get(url).then(
            r=>{
                props.setUsers(r.data.items)
                props.setFetching(false)
            }
        )
        props.changePage(pageNumber);
    }
        
    return <>
        {props.isFetching ? <Preloader /> : ''}
        <Users  changingPage = {changingPage}
                totalUsersCount = {props.totalUsersCount}
                pageSize = {props.pageSize}
                currentPage = {props.currentPage}
                users = {props.users}
                loggedUser = {props.loggedUser}
                subscribeUser = {props.subscribeUser}
                unsubscribeUser = {props.unsubscribeUser}
        />
    </>
}

let mapStateToProps = (store) => {
    return {
        users: store.usersPage.users,
        loggedUser: store.auth,
        totalUsersCount: store.usersPage.totalUsersCount,
        pageSize: store.usersPage.pageSize,
        currentPage: store.usersPage.currentPage,
        isFetching: store.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {
    unsubscribeUser,
    subscribeUser,
    setUsers,
    changePage,
    changeTotalUsersCount,
    setFetching
}) (UsersAPI)

export default UsersContainer;