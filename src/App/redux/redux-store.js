import { combineReducers, createStore, applyMiddleware} from 'redux'
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reducer'
import loggedUserReducer from './loggedUser-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    loggedUser: loggedUserReducer,
    usersPage: usersReducer
})

export let store = createStore(reducers, applyMiddleware());