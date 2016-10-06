import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import AddNote from '../containers/AddNote'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
import VisibleNoteList from '../containers/VisibleNoteList'
import Input from '../components/Input'
import Input2 from '../containers/dummyContainer2'
import TodoListContainer from '../containers/TodoListContainer'
import DummyContainer from '../containers/dummyContainer'
import ListOfTodo from '../components/ListOfTodo';

const App = () => (
	<div>
		<DummyContainer />
		<Input/>
		<Input2/>
		<VisibleTodoList />
		<VisibleNoteList/>
		<ListOfTodo/>
		<Footer />
		<UndoRedo />
	</div>
)

export default App
