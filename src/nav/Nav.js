import { createStackNavigator } from 'react-navigation'

import Home from './Home'
import Tools from './tools'
import WebViewComponent from './webViewComponent'

const navStack = createStackNavigator({
	Home: { screen: Home },
	Tools: { screen: Tools },
	WebView: { screen: WebViewComponent }
})

export default navStack
