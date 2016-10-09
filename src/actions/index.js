let nextTodoId = 0;
let nextNoteId = 0;
let nextTodoListId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const deleteTodo = (id) => ({
	type: 'DELETE_TODO',
	id
})

export const addNote = (title = "Nota", text, color="white") => ({
    type: 'ADD_NOTE',
    id: nextNoteId++,
    title,
    text,
    color

});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});


export const addTodoList = ( title, todos, color="white" ) => ({
  type: 'ADD_TODO_LIST',
  id: nextTodoListId++,
  title,
  todos,
  color
});

export const  changeColor = (color) => ({
  type: 'CHANGE_COLOR',
  color
});

export const clearTodos = (todos) => ({
  type: 'CLEAR_TODOS',
  todos
});