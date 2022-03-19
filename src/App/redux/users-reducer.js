const UNSUB = 'UNSUB',
SUB = 'SUB',
SET_USERS = 'SET_USERS'

let defaultVal = {
    users: []
}

const usersReducer = (state = defaultVal, action) => {
    
    switch (action.type) {

        case UNSUB :
            {   
                state.users.find(x=>x.id==action.user).followed = false
                return {
                    ...state,
                    users: [...state.users]
                }
            }
            break
        case SUB :
            {   
                state.users.find(x=>x.id==action.user).followed = true
                return {
                    ...state,
                    users: [...state.users]
                }
            }
            break
        case SET_USERS :
            {   
                return {
                    ...state,
                    users: [...state.users, ...action.users]
                }
            }
            break
        default:
            return state
            break
    }
}


export default usersReducer;

export const unsubscribeUserAC = (user) => ({type:UNSUB, user});
export const subscribeUserAC = (user) => ({type:SUB, user});
export const setUsersAC = (users) => ({type:SET_USERS, users});