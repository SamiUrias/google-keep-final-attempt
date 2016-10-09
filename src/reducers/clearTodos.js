/**
 * Created by samuel on 8/10/16.
 */
const clearTodosReducer = (state = {}, action) => {
	switch (action.type){
		case 'CLEAR_TODOS':
			let k = action.todos.filter(t => !t.deleted)
			console.log(k)
			for (let i = 0; i<k.length; i++){
				k[i].listed = true;
			}
			console.log(k)
			return [...state, k]
		default:
			return state;
	}
}

export default clearTodosReducer;