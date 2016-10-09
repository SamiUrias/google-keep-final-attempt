/**
 * Created by samuel on 8/10/16.
 */
const logger = store => next => action => {
	console.log('dispatching', action)
	let result = next(action)
	console.log('next state', store.getState())
	return result
}

export default logger