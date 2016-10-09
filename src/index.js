import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import logger from './middlewares/logger'
import { loadState, saveState   } from './localStorage';

const persitedState = loadState()
const store = createStore(reducer, persitedState, applyMiddleware(logger));

store.subscribe(() => {
  saveState(store.getState())
})


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')

);

