import { combineReducers } from 'redux'
import { todoReducer } from '_app/todo/todoReducer'

const rootReducer = combineReducers({
    todo: todoReducer
})

export default rootReducer