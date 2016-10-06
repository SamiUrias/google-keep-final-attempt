/**
 * Created by samuel on 6/10/16.
 */
import React, { Componet } from 'react'

import { connect } from 'react-redux'
import { addTodoList } from '../actions'


let TodoListContainer = ({ todos, dispatch, color}) =>{
	let title;

	return(
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				if (!title.value.trim()) {
					return
				}
				dispatch(addTodoList(title.value, todos, color));
				title.value = '';
			}}>
				<div>
					<span>Titulo de la lista de notas: </span> <br />
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
};

const mapStateToProps = (state) => ({
	todos: state.todos.present,
	color: state.color
});

TodoListContainer = connect(mapStateToProps)(TodoListContainer)
export default TodoListContainer
