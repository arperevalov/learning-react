const SET_USER_DATA = 'SET_USER_DATA'

let defaultVal = {
    id: 5,
    name: 'Jason Biggs',
    email: null,
    isAuth: false
}

const authReducer = (state = defaultVal, action) => {
    
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.id,
                name: action.login,
                email: action.email
            }
            break;
        default:
            return state
            break;
    }
    
}

export const setAuthData = data => ({type:SET_USER_DATA, ...data})

export default authReducer;