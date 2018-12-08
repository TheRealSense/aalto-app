import { StackNavigator } from 'react-navigation'

import Home from './Home'
import Tools from './tools'
import WebViewComponent from './webViewComponent'

const routeConfig = {
	Home: { screen: Home },
	Tools: { screen: Tools },
	WebView: { screen: WebViewComponent}
}

const StackNav = StackNavigator(routeConfig)

export default StackNav
