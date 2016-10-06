import { combineReducers } from 'redux'
import todos from './todos'
import notes from './notes'
import visibilityFilter from './visibilityFilter'
import todoList from './todoList'

const todoApp = combineReducers({
    todoList,
    todos,
    notes,
  visibilityFilter
});

export default todoApp
