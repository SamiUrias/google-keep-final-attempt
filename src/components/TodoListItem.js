/**
 * Created by samuel on 26/09/16.
 */
import React  from 'react'
import Todo from './Todo'
const TodoListItem = ({title, todos, color, date, onClick}) => (
	<div className="note-square" style={{backgroundColor: color}}>
		<p>{date}</p>
		<h1 className="">{title}</h1>
		<ul>
			{todos.filter(t => !t.deleted).filter(g => g.listed).map(todo =>
				<Todo
					key={todo.id}
					{...todo}
					onClick={onClick}
				/>
			)}
		</ul>
	</div>
);


export default TodoListItem