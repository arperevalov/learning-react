import { combineReducers, createStore, applyMiddleware} from 'redux'
import authReducer from './auth-reducer'
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    auth: authReducer,
    usersPage: usersReducer
})

export let store = createStore(reducers, applyMiddleware());