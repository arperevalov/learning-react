import { combineReducers, createStore, applyMiddleware} from 'redux'
import dialogReducer from './dialog-reducer'
import profileReducer from './profile-reducer'
import userReducer from './user-reducer'

let reducers = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    loggedUser: userReducer
})

export let store = createStore(reducers, applyMiddleware());