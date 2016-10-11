import React from 'react'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import UndoRedo from '../containers/UndoRedo'
import VisibleNoteList from '../containers/VisibleNoteList'
import Input from '../components/Input'
import ListOfTodo from '../components/ListOfTodo';
import TitleBar from './TitleBar'

const App = (store) => (
	<div>
		<TitleBar/>
		<Input/>
		<VisibleTodoList />
		<VisibleNoteList/>
		<ListOfTodo/>
		<Footer />
		<UndoRedo />
	</div>
)

export default App
