import { combineReducers } from 'redux'
import todos from './todos'
import notes from './notes'
import visibilityFilter from './visibilityFilter'
import todoList from './todoList'
import color from './color'



const todoApp = combineReducers({
    todoList,
    todos,
    notes,
  color,
  visibilityFilter
});

export default todoApp
