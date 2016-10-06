/**
 * Created by samuel on 6/10/16.
 */
const changeColorReducer = (state = {}, action) => {
	switch (action.type) {
		case 'CHANGE_COLOR':
			console.log("change color");
			return action.color;
			break;

		default:
			return state;
	}
}

export default changeColorReducer