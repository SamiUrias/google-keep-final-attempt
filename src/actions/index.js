let nextTodoId = 0;
let nextNoteId = 0;
let nextTodoListId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const addNote = (title = "Nota", text) => ({
    type: 'ADD_NOTE',
    id: nextNoteId++,
    title,
    text
});

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});


export const addTodoList = ( title, todos ) => ({
  type: 'ADD_TODO_LIST',
  id: nextTodoListId++,
  title,
  todos
});