/**
 * Created by samuel on 8/10/16.
 */
const clearTodosReducer = (state = {}, action) => {
	switch (action.type){
		case 'CLEAR_TODOS':
			let todos = action.todos.filter(t => !t.deleted)
			console.log(todos)
			for (let i = 0; i<todos.length; i++){
				todos[i].listed = true;
			}
			console.log(todos)
			return [...state, todos]
		default:
			return state;
	}
}

export default clearTodosReducer;