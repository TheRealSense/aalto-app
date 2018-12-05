import { StackNavigator } from 'react-navigation'

import Home from './Home'
import Tools from './tools'

const routeConfig = {
	Home: { screen: Home },
	Tools: { screen: Tools }
}

const StackNav = StackNavigator(routeConfig)

export default StackNav
