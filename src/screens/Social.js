/* eslint-disable import/no-extraneous-dependencies */
//@flow
import React from 'react'
import {
	createStackNavigator,
	createBottomTabNavigator
} from 'react-navigation'
import { Avatar, StreamApp, IconBadge } from 'react-native-activity-feed'
import Icon from '../components/Icon'
import FeedScreen from './FeedScreen'
import SearchScreen from './SearchScreen'
import NotificationsScreen from './NotificationsScreen'
import ProfileScreen from './ProfileScreen'
import EditProfileScreen from './EditProfileScreen'
import SinglePostScreen from './SinglePostScreen'
import StatusUpdateScreen from './StatusUpdateScreen'
import HomeScreen from './Home'
import Tools from './tools'
import WebViewComponent from '../components/webViewComponent'
import { colors, fonts } from '../theme'
import type { UserResponse } from '../..types'

// $FlowFixMe
// const authStream = () => {
//     console.warn("auth run")
//     let currentUser
//     let apiKey = "ygeqczcsmgns"
//     let appId = "45404"
//     let apiSecret =
//         "x2at6sam4adpq76uzr43x2jhv3mnk5x2zjnuudwnstn3qf9rb4swk3vx95kjvxjn"
//     let token = ""
//     const client: CloudClient = stream.connectCloud(apiKey, appId)

//     function createUserSession(userId): UserSession {
//         return client.createUserSession(
//             stream.signing.JWTUserSessionToken(apiSecret, userId)
//         )
//     }

//     const signUpStream = async () => {
//         try {
//             const user = await Auth.currentAuthenticatedUser()
//             currentUser = await createUserSession(user.username)
//             console.warn(currentUser)
//             token = currentUser.token
//             await currentUser.user.getOrCreate({
//                 name: user.username,
//                 url: "Please add your email",
//                 desc: "Please add your description",
//                 profileImage: "http://smk.org.uk/wp-content/uploads/avatar.jpg",
//                 coverImage:
//                     "http://colorfully.eu/wp-content/uploads/2012/10/empty-road-highway-with-fog-facebook-cover.jpg"
//             })
//             await currentUser.followUser(currentUser.user)
//             return token
//         } catch (error) {
//             console.warn(error)
//         }
//     }
// }

const HomeStack = createStackNavigator({
	Home: { screen: HomeScreen },
	Tools: { screen: Tools },
	WebView: { screen: WebViewComponent }
})

const NotificationsStack = createStackNavigator({
	Notifications: { screen: NotificationsScreen }
})

const ProfileStack = createStackNavigator({
	Profile: { screen: ProfileScreen }
})

const SearchStack = createStackNavigator({
	Search: { screen: SearchScreen }
})

const FeedStack = createStackNavigator({
	Feed: { screen: FeedScreen }
})

const TabNavigator = createBottomTabNavigator(
	{
		Home: HomeStack,
		Feed: FeedStack,
		Search: SearchStack,
		Notifications: NotificationsStack,
		Profile: ProfileStack
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: () => {
				const { routeName } = navigation.state
				if (routeName === 'Home') {
					return <Icon name="home" />
				} else if (routeName === 'Search') {
					return <Icon name="search" />
				} else if (routeName === 'Feed') {
					return <Icon name="feed" />
				} else if (routeName === 'Notifications') {
					return (
						<IconBadge showNumber>
							<Icon name="notifications" />
						</IconBadge>
					)
				} else if (routeName === 'Profile') {
					return (
						<Avatar
							source={(userData: UserResponse) =>
								userData.data.profileImage
							}
							size={25}
							noShadow
						/>
					)
				}
			}
		}),
		initialRouteName: 'Home',
		tabBarOptions: {
			showLabel: true,
			activeTintColor: colors.primary,
			inactiveTintColor: colors.secondary,
			indicatorStyle: { backgroundColor: colors.secondary },
			labelStyle: {
				fontFamily: fonts.base,
				fontSize: 12
			},
			style: {
				backgroundColor: 'white',
				borderTopWidth: 0,
				paddingBottom: 3
			}
		}
	}
)

const doNotShowHeaderOption = {
	navigationOptions: {
		header: null
	}
}

const Navigation = createStackNavigator({
	Tabs: {
		screen: TabNavigator,
		...doNotShowHeaderOption
	},
	SinglePost: { screen: SinglePostScreen },
	NewPost: { screen: StatusUpdateScreen },
	EditProfile: { screen: EditProfileScreen }
})

const App = () => {
	let apiKey = 'ygeqczcsmgns'
	let appId = '45404'
	// let token = authStream
	let token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYTNkcHJpbnRlciJ9.2tw6SGWls9IkRq_WnCLjL2NqZO_lqjidaVTiY-DfVP4'

	return (
		<StreamApp
			apiKey={apiKey}
			appId={appId}
			token={token}
			defaultUserData={{
				name: 'Justice a3dprinter',
				url: '3dprinting.com',
				desc: 'Smart, violent and brutally tough solutions to crime.',
				profileImage:
					'https://images-na.ssl-images-amazon.com/images/I/81NadegaTkL._SX522_.jpg',
				coverImage: ''
			}}
		>
			<Navigation />
		</StreamApp>
	)
}

export default App
