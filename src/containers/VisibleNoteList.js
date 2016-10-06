/**
 * Created by samuel on 26/09/16.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import NoteList from '../components/NoteList'

const getVisibleNotes = (notes, filter) => {
	switch (filter) {
		case 'SHOW_ALL':
			return notes
		case 'SHOW_COMPLETED':
			return notes.filter(t => t.completed)
		case 'SHOW_ACTIVE':
			return notes.filter(t => !t.completed)
		default:
			throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = (state) => ({
	notes: getVisibleNotes(state.notes.present, state.visibilityFilter)
});

const VisibleNoteList = connect(mapStateToProps,)(NoteList);

export default VisibleNoteList
