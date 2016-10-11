/**
 * Created by samuel on 26/09/16.
 */
import { connect } from 'react-redux'
import NoteList from '../components/NoteList'

const mapStateToProps = (state) => ({
	notes: state.notes.present,
	selectedColor: state.color
});

const VisibleNoteList = connect(mapStateToProps,)(NoteList);

export default VisibleNoteList
