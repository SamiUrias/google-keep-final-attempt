/**
 * Created by samuel on 26/09/16.
 */
import React  from 'react'
import Todo from './Todo'
const TodoListItem = ({title, todos, color, date}) => (
	<div className="note-square" style={{backgroundColor: color}}>
		<p>{date}</p>
		<h1 className="">{title}</h1>
		<ul>
			{todos.map(todo =>
				<Todo
					key={todo.id}
					{...todo}
				/>
			)}
		</ul>
	</div>
);


export default TodoListItem