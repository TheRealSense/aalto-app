// @flow

import React from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { FlatFeed } from 'react-native-activity-feed'
import type { NavigationScreen } from 'react-native-activity-feed'
import type { NavigationEventSubscription } from 'react-navigation'
import Button from '../components/Button'
import ProfileHeader from '../components/ProfileHeader'

type Props = {|
	navigation: NavigationScreen
|}

export default class ProfileScreen extends React.Component<Props> {
	static navigationOptions = ({ navigation }: Props) => ({
		headerStyle: {
			backgroundColor: 'transparent',
			borderBottomColor: 'transparent'
		},
		headerRight: (
			<Button pressed={() => navigation.navigate('EditProfile')}>
				Edit Profile
			</Button>
		),
		headerTransparent: true,
		headerBackTitle: null
	})

	componentDidMount() {
		const { navigation } = this.props
		this._navListener = navigation.addListener('didFocus', () => {
			StatusBar.setBarStyle('light-content')
		})
	}

	_navListener: NavigationEventSubscription

	render() {
		return (
			<ScrollView style={{ flex: 1 }}>
				<ProfileHeader />
				<FlatFeed feedGroup="user" />
			</ScrollView>
		)
	}
}
