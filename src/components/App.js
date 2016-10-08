import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddNote from '../containers/AddNote'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
import VisibleNoteList from '../containers/VisibleNoteList'
import Input from '../components/Input'
import TodoListContainer from '../containers/TodoListContainer'
import ListOfTodo from '../components/ListOfTodo';

const App = (store) => (
	<div>
		<Input/>
		<VisibleTodoList />
		<VisibleNoteList/>
		<ListOfTodo/>
		<Footer />
		<UndoRedo />
	</div>
)

export default App
