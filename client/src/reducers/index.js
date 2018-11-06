import {combineReducers} from 'redux'
import authReducer from './authReducer'
import registation from './registation'

export default combineReducers({
    auth:authReducer,
    registation:registation
})