const UNSUB = 'UNSUB',
SUB = 'SUB',
SET_USERS = 'SET_USERS',
CHANGE_PAGE = 'CHANGE_PAGE',
CHANGE_TOTAL_USERS_COUNT = 'CHANGE_TOTAL_USERS_COUNT'

let defaultVal = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
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
                    users: [...action.users]
                }
            }
            break
        case CHANGE_PAGE :
            {
                return {
                    ...state,
                    currentPage: action.currentPage
                }
            }
        case CHANGE_TOTAL_USERS_COUNT :
            {
                return {
                    ...state,
                    totalUsersCount: action.totalUsersCount
                }
            }
        default:
            return state
            break
    }
}


export default usersReducer;

export const unsubscribeUserAC = (user) => ({type:UNSUB, user});
export const subscribeUserAC = (user) => ({type:SUB, user});
export const setUsersAC = (users) => ({type:SET_USERS, users});
export const changePageAC = (currentPage) => ({type:CHANGE_PAGE, currentPage});
export const changeTotalUsersCountAC = (totalUsersCount) => ({type:CHANGE_TOTAL_USERS_COUNT, totalUsersCount});