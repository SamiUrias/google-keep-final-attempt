import undoable from 'redux-undo'

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
				deleted: false,
				listed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
		case 'DELETE_TODO':
			if (state.id !== action.id) {
				return state
			}
			return {
				...state,
				deleted: !state.deleted
			}

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(state)
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
		case 'DELETE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(todos)

export default undoableTodos
