import React from 'react';
import Profile from './Profile'
import { newPostActionCreator, newPostFieldUpdateActionCreator } from '../../redux/profile-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (store) => {
    return {
        profilePage: store.profilePage,
        user: store.loggedUser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        submitPost : () => {
            dispatch(newPostActionCreator())
        },
        changeInfo: (text) => {
            dispatch(newPostFieldUpdateActionCreator(text))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile)

export default ProfileContainer;