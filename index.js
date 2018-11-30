import Amplify from 'aws-amplify'
import React from 'react'
import { AppRegistry } from 'react-native'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './src/reducers'
import App from './src/App'
import { name as appName } from './app.json'
import config from './src/aws-exports'

const store = createStore(rootReducer, applyMiddleware(thunk))

Amplify.configure(config)

const ReduxApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

AppRegistry.registerComponent(appName, () => ReduxApp)
