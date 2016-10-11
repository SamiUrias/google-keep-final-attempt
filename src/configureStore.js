/**
 * Created by samuel on 9/10/16.
 */
import reducer from './reducers'
import logger from './middlewares/logger'
import { loadState, saveState   } from './localStorage';
import { createStore, applyMiddleware } from 'redux'
import undoable from 'redux-undo';
import { ActionCreators } from 'redux-undo';

const configureStore = () => {

	const persitedState = loadState()
	const store = createStore(undoable(reducer), persitedState, applyMiddleware(logger));

	store.subscribe(() => {
		saveState(store.getState())
	})

	return store
}

export default configureStore;