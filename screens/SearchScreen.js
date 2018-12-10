/* eslint-disable react/prop-types */
import React from 'react'
import { View, StatusBar, Image, ScrollView, FlatList } from 'react-native'

import { Avatar, UserCard } from 'react-native-activity-feed'
import LargeHeading from '../components/LargeHeading'
import HorizontalScrollFeed from '../components/HorizontalScrollFeed'
import GroupCard from '../components/GroupCard'
import SearchBox from '../components/SearchBox'

class SearchScreen extends React.Component {
	static navigationOptions = () => ({
		title: 'DISCOVER',
		headerTitleStyle: {
			fontWeight: '500',
			fontSize: 13
		},
		headerLeft: (
			<View style={{ paddingLeft: 15 }}>
				<Image
					source={require('../images/icons/categories.png')}
					style={{ width: 23, height: 23 }}
				/>
			</View>
		),
		headerRight: (
			<View style={{ paddingRight: 15 }}>
				<Image
					source={require('../images/icons/post.png')}
					style={{ width: 23, height: 23 }}
				/>
			</View>
		)
	})

	constructor(props) {
		super(props)
		this.state = {
			interestingUsers: [
				{
					id: 1235,
					user_image:
						'https://randomuser.me/api/portraits/women/65.jpg'
				},
				{
					id: 2345,
					user_image: 'https://randomuser.me/api/portraits/men/24.jpg'
				},
				{
					id: 3456,
					user_image:
						'https://randomuser.me/api/portraits/women/45.jpg'
				},
				{
					id: 4567,
					user_image: 'https://randomuser.me/api/portraits/men/45.jpg'
				},
				{
					id: 6789,
					user_image:
						'https://randomuser.me/api/portraits/women/23.jpg'
				},
				{
					id: 7890,
					user_image: 'https://randomuser.me/api/portraits/men/67.jpg'
				},
				{
					id: 2456,
					user_image:
						'https://randomuser.me/api/portraits/women/12.jpg'
				}
			],
			trendingGroups: [
				{
					id: 1234,
					name: '3D printer',
					image:
						'https://images.unsplash.com/photo-1514063364532-5abd25e38290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
					icon: ''
				},
				{
					id: 2345,
					name: 'Music',
					image:
						'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80',
					icon: ''
				},
				{
					id: 3456,
					name: 'EPSON',
					image:
						'https://images.unsplash.com/photo-1510511336377-1a9caa095849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80\'',
					icon: ''
				},
				{
					id: 4567,
					name: 'Sewing',
					image:
						'https://images.unsplash.com/photo-1517840545241-b491010a8af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
					icon: ''
				},
				{
					id: 6789,
					name: 'Vinyl',
					image:
						'https://images.unsplash.com/photo-1521249664898-864e6c1b6d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80',
					icon: ''
				},
				{
					id: 7890,
					name: 'Laser',
					image:
						'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3823&q=80',
					icon: ''
				},
				{
					id: 8909,
					name: 'Overlock',
					image:
						'https://images.unsplash.com/photo-1517840545241-b491010a8af4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80',
					icon: ''
				}
			],
			users: [
				{
					id: 1235,
					name: 'Danny',
					user_image:
						'https://randomuser.me/api/portraits/women/65.jpg',
					followed: false
				},
				{
					id: 2345,
					name: 'James',
					user_image:
						'https://randomuser.me/api/portraits/men/24.jpg',
					followed: true
				},
				{
					id: 3456,
					name: 'Jennifer',
					user_image:
						'https://randomuser.me/api/portraits/women/45.jpg',
					followed: false
				},
				{
					id: 4567,
					name: 'hello world',
					user_image:
						'https://randomuser.me/api/portraits/men/45.jpg',
					followed: false
				},
				{
					id: 6789,
					name: 'hello world',
					user_image:
						'https://randomuser.me/api/portraits/women/23.jpg',
					followed: false
				},
				{
					id: 7890,
					name: 'hello world',
					user_image:
						'https://randomuser.me/api/portraits/men/67.jpg',
					followed: false
				},
				{
					id: 2456,
					name: 'hello world',
					user_image:
						'https://randomuser.me/api/portraits/women/12.jpg',
					followed: false
				}
			]
		}
	}

	componentDidMount() {
		const { navigation } = this.props
		this._navListener = navigation.addListener('didFocus', () => {
			StatusBar.setBarStyle('dark-content')
		})
	}

	render() {
		const { trendingGroups, interestingUsers, users } = this.state
		return (
			<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
				<SearchBox />

				<LargeHeading>Trending Groups</LargeHeading>
				<HorizontalScrollFeed
					data={trendingGroups}
					renderItem={({ item }) => (
						<View style={{ marginRight: 6 }}>
							<GroupCard item={item} />
						</View>
					)}
					keyExtractor={item => `item-${item.id}`}
				/>

				<LargeHeading>Interesting Users</LargeHeading>
				<HorizontalScrollFeed
					data={interestingUsers}
					renderItem={({ item }) => (
						<View style={{ marginRight: 6 }}>
							<Avatar
								size={60}
								noShadow
								source={item.user_image}
							/>
						</View>
					)}
					keyExtractor={item => `item-${item.id}`}
				/>

				<LargeHeading>People you may know</LargeHeading>
				<FlatList
					style={{ marginTop: 15 }}
					data={users}
					renderItem={({ item }) => (
						<View
							style={{
								marginLeft: 15,
								marginRight: 15,
								marginBottom: 15
							}}
						>
							<UserCard
								username="UserName"
								subtitle="@subtitle"
								user={item}
								follow
							/>
						</View>
					)}
					keyExtractor={item => `item-${item.id}`}
				/>
			</ScrollView>
		)
	}
}

export default SearchScreen
