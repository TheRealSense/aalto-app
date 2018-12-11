import { createStackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Tools from '../screens/tools'
import WebViewComponent from '../components/webViewComponent'

const navStack = createStackNavigator({
	Home: { screen: Home },
	Tools: { screen: Tools },
	WebView: { screen: WebViewComponent }
})

export default navStack
