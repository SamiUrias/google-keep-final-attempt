import React, { PropTypes } from 'react'
import Note from './Note'

const NoteList = ({ notes }) => (
    <div className="note-list">
        {notes.map(note =>
            <Note
                key={note.id}
                {...note}
            />
        )}
    </div>
);

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
};

export default NoteList
