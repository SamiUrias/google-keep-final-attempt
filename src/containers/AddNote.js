import React from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions'

let AddNote = ({ dispatch, color }) =>{
    let input;
    let title;

    return(
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                console.log("Color picker - color selected: " + color);
                dispatch(addNote(title.value, input.value, color));
                input.value = '';
                title.value = '';
            }}>
                <span className="input-label-style">Titulo: </span>
                <input placeholder="Titulo" ref={node => {
                    title = node
                }} /><br/>
                <span className="input-label-style">Cuerpo: </span>
                <input placeholder="Cuerpo de la nota" ref={node => {
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

const mapStateToProps = (state) => {
    return {color: state.color}
}

AddNote = connect(mapStateToProps)(AddNote)
export default AddNote
