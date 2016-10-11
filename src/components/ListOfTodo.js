import React from 'react'
import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

const ListOfTodos = ({ listas, onTodoClick }) => (
	<div className="" >
		{listas.map(lista =>
			<TodoListItem
				key={lista.id}
				{...lista}
			/>
		)}
	</div>
);


const mapStateToProps = (state) => ({
	listas: state.todoList
});

const mapDispatchToProps =({
	onTodoClick: toggleTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfTodos);
