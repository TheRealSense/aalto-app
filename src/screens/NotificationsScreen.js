//@flow
import React from 'react'
import { StatusBar, Image, View } from 'react-native'
import {
	NotificationFeed,
	Activity,
	LikeButton,
	ReactionIcon
} from 'react-native-activity-feed'
import type { NavigationScreen } from 'react-native-activity-feed'
import type { NavigationEventSubscription } from 'react-navigation'
import Notification from '../components/Notification'
import Follow from '../components/Notifications/Follow'

import CategoriesIcon from '../assets/icons/categories.png'
import PostIcon from '../assets/icons/post.png'
import ReplyIcon from '../assets/icons/reply.png'

type Props = {|
	navigation: NavigationScreen
|}

export default class NotificationScreen extends React.Component<Props> {
	static navigationOptions = () => ({
		title: 'NOTIFICATIONS',
		headerLeft: (
			<View style={{ paddingLeft: 15 }}>
				<Image
					source={CategoriesIcon}
					style={{ width: 23, height: 23 }}
				/>
			</View>
		),
		headerRight: (
			<View style={{ paddingRight: 15 }}>
				<Image source={PostIcon} style={{ width: 23, height: 23 }} />
			</View>
		),
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

	componentDidUpdate() {}

	_renderGroup = ({ activityGroup, styles, ...props }: any) => {
		let verb = activityGroup.activities[0].verb
		if (verb === 'follow') {
			return (
				<Follow activities={activityGroup.activities} styles={styles} />
			)
		} else if (verb === 'heart' || verb === 'repost') {
			return (
				<Notification
					activities={activityGroup.activities}
					styles={styles}
				/>
			)
		} else {
			let activity = activityGroup.activities[0]
			return (
				<Activity
					activity={activity}
					{...props}
					Footer={
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center'
							}}
						>
							<LikeButton activity={activity} {...props} />

							<ReactionIcon
								icon={ReplyIcon}
								labelSingle="comment"
								labelPlural="comments"
								counts={
									activityGroup.activities.reaction_counts
								}
								kind="comment"
							/>
						</View>
					}
				/>
			)
		}
	}

	_navListener: NavigationEventSubscription

	render() {
		const { navigation } = this.props
		return (
			<NotificationFeed
				Group={this._renderGroup}
				navigation={navigation}
				notify
			/>
		)
	}
}
