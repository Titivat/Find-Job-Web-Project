import loggedReducer from './isLogin'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    isLogged: loggedReducer
})

export default allReducers