/**
 * Created by samuel on 6/10/16.
 */
const todoList = (state = {}, action) => {
	switch (action.type){
		case 'ADD_TODO_LIST':
			return {
				id: action.id,
				title: action.title,
				todos: action.todos
			};
			break;
		default:
			return state
	}
};

const todoLists = (state = [], action) =>{
	switch (action.type) {
		case 'ADD_TODO_LIST':
			console.log("Add todo list reducer");
			console.log(action.todos)
			console.log(todoList(undefined, action))
			return[
				...state,
				todoList(undefined, action)
			]
		default:
			return state;
	}
}

export default todoLists;
