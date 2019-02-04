import { combineReducers } from 'redux'
import finder from './reducers/finder'

const rootReducer = combineReducers({
    finder,
})

export default rootReducer