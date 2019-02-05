import { combineReducers } from 'redux'
import { reducer as finder } from './reducers/finder'

const rootReducer = combineReducers({
  finder,
})

export default rootReducer
