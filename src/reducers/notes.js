/**
 * Created by samuel on 25/09/16.
 */
import undoable from 'redux-undo';

const getActualDate = () => {
    var d = new Date(),
      seconds = d.getSeconds().toString(),
      minutes = d.getMinutes().toString().length === 1 ? '0'+d.getMinutes() : d.getMinutes(),
      hours = d.getHours().toString().length === 1 ? '0'+d.getHours() : d.getHours(),
      ampm = d.getHours() >= 12 ? 'pm' : 'am',
      months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+':'+seconds+ampm;
};

const note = (state, action) => {
    switch (action.type){
        case 'ADD_NOTE':
            return {
                id: action.id,
                title: action.title,
                text: action.text,
                color: action.color,
                date: getActualDate()
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

const undoableNotes = undoable(notes);

export default undoableNotes
