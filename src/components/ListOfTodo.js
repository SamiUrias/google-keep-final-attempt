import React from 'react'
import TodoListItem from './TodoListItem'
import { connect } from 'react-redux'

const ListOfTodos = ({ listas }) => (
	<div className="" >
		<span>This is the list of todos</span><br />
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


export default connect(mapStateToProps,)(ListOfTodos);
