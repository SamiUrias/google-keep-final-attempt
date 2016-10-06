import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'

let AddNote = ({ dispatch }) =>{
    let input;
    let title;

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                dispatch(addNote(title.value, input.value));
                input.value = '';
                title.value = '';
            }}>
                <input ref={node => {
                    title = node
                }} /><br/>
                <input ref={node => {
                    input = node
                }} />
                <br/>
                <button type="submit">
                    Add Note
                </button>
            </form>
        </div>
    )
}

AddNote = connect()(AddNote)
export default AddNote
