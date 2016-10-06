/**
 * Created by samuel on 25/09/16.
 */
import undoable, { distinctState } from 'redux-undo';

const note = (state, action) => {
    switch (action.type){
        case 'ADD_NOTE':
            let time = new Date();
          let timeString = time.getHours() + ":" + time.getMinutes()
            return {
                id: action.id,
                title: action.title,
                text: action.text,
                color: action.color,
                date: timeString
            };
        default:
            return state
    }
}

const notes = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            console.log("Note reducer: " + action.color)
            return [
                ...state,
                note(undefined, action)
            ];
        default:
            return state;
    }
}

const undoableNotes = undoable(notes, {
    filter: distinctState()
});

export default undoableNotes
