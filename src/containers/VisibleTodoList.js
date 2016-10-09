import { connect } from 'react-redux'
import { toggleTodo, deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos.filter(t => !t.deleted ).filter(t => !t.listed)
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed ).filter(t => !t.deleted)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed).filter(t => !t.deleted)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos.present, state.visibilityFilter)
});

const mapDispatchToProps = ({
  onTodoClick: toggleTodo,
  onDeleteTodo: deleteTodo
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList
