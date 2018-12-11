// @flow
import React from 'react'
import { StatusBar, Image, TouchableOpacity, View } from 'react-native'

import {
	Avatar,
	FlatFeed,
	Activity,
	LikeButton,
	ReactionIcon
} from 'react-native-activity-feed'
import type { NavigationScreen } from 'react-native-activity-feed'
import type { NavigationEventSubscription } from 'react-navigation'
import type { UserResponse, ActivityData } from '../../types'

import PostIcon from '../assets/icons/post.png'
import ReplyIcon from '../assets/icons/reply.png'

type Props = {|
	navigation: NavigationScreen
|}

class HomeScreen extends React.Component<Props> {
	static navigationOptions = ({ navigation }: Props) => ({
		title: 'HOME',
		headerTitleStyle: {
			fontWeight: '500',
			fontSize: 13
		},
		headerLeft: (
			<TouchableOpacity
				onPress={() => navigation.navigate('Profile')}
				style={{ paddingLeft: 15 }}
			>
				<Avatar
					source={(userData: UserResponse) =>
						userData.data.profileImage
					}
					size={23}
					noShadow
				/>
			</TouchableOpacity>
		),
		headerRight: (
			<TouchableOpacity
				onPress={() => navigation.navigate('NewPost')}
				style={{ paddingRight: 15 }}
			>
				<Image source={PostIcon} style={{ width: 23, height: 23 }} />
			</TouchableOpacity>
		)
	})

	componentDidMount() {
		const { navigation } = this.props
		this._navListener = navigation.addListener('didFocus', () => {
			StatusBar.setBarStyle('dark-content')
		})
	}

	_onPressActivity = (activity: ActivityData) => {
		const { navigation } = this.props
		navigation.navigate('SinglePost', {
			activity: activity
		})
	}

	_navListener: NavigationEventSubscription

	render() {
		const { navigation } = this.props
		return (
			<FlatFeed
				feedGroup="timeline"
				options={{
					limit: 10
				}}
				notify
				navigation={navigation}
				Activity={props => (
					<TouchableOpacity
						onPress={() => this._onPressActivity(props.activity)}
					>
						<Activity
							{...props}
							Footer={
								<View
									style={{
										flexDirection: 'row',
										alignItems: 'center'
									}}
								>
									<LikeButton {...props} />

									<ReactionIcon
										icon={ReplyIcon}
										labelSingle="comment"
										labelPlural="comments"
										counts={props.activity.reaction_counts}
										kind="comment"
									/>
								</View>
							}
						/>
					</TouchableOpacity>
				)}
			/>
		)
	}
}

export default HomeScreen
