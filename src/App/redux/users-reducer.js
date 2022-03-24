const UNSUB = 'UNSUB',
SUB = 'SUB',
SET_USERS = 'SET_USERS',
CHANGE_PAGE = 'CHANGE_PAGE',
CHANGE_TOTAL_USERS_COUNT = 'CHANGE_TOTAL_USERS_COUNT',
SET_FETCHING = 'SET_FETCHING'

let defaultVal = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case SET_FETCHING :
            {
                return {
                    ...state,
                    isFetching: action.isFetching
                }
            }
        default:
            return state
            break
    }
}


export default usersReducer;

export const unsubscribeUser = (user) => ({type:UNSUB, user});
export const subscribeUser = (user) => ({type:SUB, user});
export const setUsers = (users) => ({type:SET_USERS, users});
export const changePage = (currentPage) => ({type:CHANGE_PAGE, currentPage});
export const changeTotalUsersCount = (totalUsersCount) => ({type:CHANGE_TOTAL_USERS_COUNT, totalUsersCount});
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching})