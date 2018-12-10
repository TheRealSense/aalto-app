// @flow
import React from 'react'
import { StatusBar, Text, TouchableOpacity } from 'react-native'
import { BackButton } from 'react-native-activity-feed'
import type { NavigationScreen } from 'react-native-activity-feed'
import type { NavigationEventSubscription } from 'react-navigation'
import EditProfileForm from '../components/EditProfileForm'

type Props = {|
	navigation: NavigationScreen
|}

export default class EditProfileScreen extends React.Component<Props> {
	static navigationOptions = ({ navigation }: Props) => ({
		title: 'EDIT PROFILE',
		// TODO @Jaap: Probably Text is not the correct component here, probably
		// also good to go back to the profile page after pressing save
		headerRight: (
			<TouchableOpacity onPress={navigation.getParam('saveFunc')}>
				<Text>Save</Text>
			</TouchableOpacity>
		),
		headerLeft: <BackButton pressed={() => navigation.goBack()} blue />,
		headerStyle: {
			paddingLeft: 15,
			paddingRight: 15
		},
		headerTitleStyle: {
			fontWeight: '500',
			fontSize: 13
		}
	})

	componentDidMount() {
		const { navigation } = this.props
		this._navListener = navigation.addListener('didFocus', () => {
			StatusBar.setBarStyle('dark-content')
		})
	}

	_navListener: NavigationEventSubscription

	render() {
		const { navigation } = this.props
		return (
			<EditProfileForm
				registerSave={saveFunc => {
					navigation.setParams({ saveFunc })
				}}
			/>
		)
	}
}
