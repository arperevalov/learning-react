import React from "react"
import { connect } from "react-redux"
import Header from "./Header"
import { setAuthData } from "./../../redux/auth-reducer"
import { useEffect } from "react"
import axios from "axios"


const HeaderAPI = (props) => {

    useEffect(()=>{
        let url = `https://social-network.samuraijs.com/api/1.0/auth/me`
        axios.get(url, {withCredentials:true}).then(
            r=>{
                props.setAuthData(r.data.data)
                debugger
            }
        )
    },[])

    return <Header {...props}/>
}

const mapStateToProps = store => {
    return {
        isAuth: store.auth.isAuth,
        login: store.auth.login
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    setAuthData
})(HeaderAPI)