/**
 * Created by samuel on 6/10/16.
 */
import React, { Componet } from 'react'

import { connect } from 'react-redux'
import { addTodoList } from '../actions'


let TodoListContainer = ({ todos, dispatch }) =>{
	let title;

	return(
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				if (!title.value.trim()) {
					return
				}
				dispatch(addTodoList(title.value, todos));
				title.value = '';
			}}>
				<div>
					<span>Todo list title: </span>
					<input ref={node => {
						title = node
					}} />
				</div>
				<button type="submit">
					Add todo List
				</button>
			</form>

		</div>
	)
}

const mapStateToProps = (state) => ({
	todos: state.todos.present
});

TodoListContainer = connect(mapStateToProps)(TodoListContainer)
export default TodoListContainer
