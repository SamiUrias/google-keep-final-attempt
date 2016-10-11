/**
 * Created by samuel on 11/10/16.
 */

import deepFreeze from 'deep-freeze';
import expect from 'expect';
import todos  from '../reducers/todos';

const testAddTodo = () => {
	console.log("testing")
	const stateBefore = {
		casa: "Casa"
	}

	const action = {
		type: 'ADD_TODO',
		text: 'test',
		id: 1
	}

	const stateAfter = {
		casa: "Casas"
	}

	deepFreeze(stateBefore);
	deepFreeze(action);

	expect(
		todos(stateBefore, action)
	).toEqual(stateAfter)
}


console.log("add todo test passed");
export { testAddTodo };
