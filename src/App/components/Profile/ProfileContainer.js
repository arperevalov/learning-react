import React, { useEffect } from 'react';
import Profile from './Profile'
import axios from 'axios';
import { newPost, newPostFieldUpdate, setProfileUser } from '../../redux/profile-reducer';
import { setFetching } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Preloader from '../Preloader';

const ProfileAPI = props => {

    const params = useParams();

    useEffect(()=>{
        if(params.id !== undefined) {
            props.setFetching(true)
            let url = `https://social-network.samuraijs.com/api/1.0/profile/${params.id}`
            axios.get(url).then(
                r=>{
                    props.setProfileUser(r.data)
                    props.setFetching(false)
                }
            )
        }      
    },[])

    if(props.profilePage.user === null || props.isFetching) {
        return <Preloader/>
    }

    return <Profile {...props}/>
}

let mapStateToProps = (store) => {
    return {
        profilePage: store.profilePage,
        isFetching: store.usersPage.isFetching
    }
}

const ProfileContainer = connect(mapStateToProps, {
    newPost,
    newPostFieldUpdate,
    setFetching,
    setProfileUser
}) (ProfileAPI)

export default ProfileContainer;