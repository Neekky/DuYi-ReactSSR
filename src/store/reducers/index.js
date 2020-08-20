import {combineReducers} from 'redux'
import counter from './counter'
import movies from './movies'

export default combineReducers({
    counter,
    movies
})