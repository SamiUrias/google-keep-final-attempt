import { combineReducers } from 'redux'
import todos from './todos'
import notes from './notes'
import visibilityFilter from './visibilityFilter'
import todoList from './todoList'
import color from './color'
import clearTodosReducer from './clearTodos'



const todoApp = combineReducers({
    todoList,
    todos,
    notes,
  color,
  clearTodosReducer,
  visibilityFilter
});

export default todoApp
