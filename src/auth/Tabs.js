import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { colors, fonts } from '../theme'
import SignIn from './SignIn'
import SignUp from './SignUp'

const styles = StyleSheet.create({
	icon: {
		width: 26,
		height: 26
	}
})

const TabNavigator = createBottomTabNavigator(
	{
		SignIn: SignIn,
		SignUp: SignUp
	},
	{
		navigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ tintColor }) => {
				const { routeName } = navigation.state
				if (routeName === 'SignIn') {
					return (
						<Image
							source={require('../assets/signInButton.png')}
							style={[styles.icon, { tintColor }]}
						/>
					)
				} else if (routeName === 'SignUp') {
					return (
						<Image
							source={require('../assets/signUpButton.png')}
							style={[styles.icon, { tintColor }]}
						/>
					)
				}
			}
		}),
		initialRouteName: 'SignIn',
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
		},
		animationEnabled: true,
		swipeEnabled: true
	}
)
export default TabNavigator
