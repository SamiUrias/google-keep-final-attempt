/**
 * Created by samuel on 9/10/16.
 */
import React from 'react'
import { Provider } from 'react-redux'
import App from '../components/App'

const Root =  ({store}) => (
	<Provider store={store}>
		<App />
	</Provider>

);



export default Root