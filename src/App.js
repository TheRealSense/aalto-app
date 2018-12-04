/* eslint-disable no-useless-escape */
import React from 'react'
import { StatusBar, Platform, Linking } from 'react-native'

import { connect } from 'react-redux'
import { Auth } from 'aws-amplify'

import Tabs from './auth/Tabs'
import Nav from './nav/Nav'

class App extends React.Component {
	static navigationOptions = {
		title: 'App'
	}

	state = {
		user: {},
		isLoading: true,
		loggedIn: false
	}

	async componentDidMount() {
		let { isLoading, user, loggedIn } = this.state

		if (isLoading) return null
		this.state.loggedIn = false
		if (user.username) {
			this.state.loggedIn = true
		}

		if (loggedIn) {
			StatusBar.setHidden(true)
			if (Platform.OS === 'android') {
				Linking.getInitialURL().then(url => {
					this.navigate(url)
				})
			} else {
				Linking.addEventListener('url', this.handleOpenURL)
			}
		}

		try {
			const user = await Auth.currentAuthenticatedUser()
			this.setState({ user, isLoading: false })
		} catch (err) {
			this.setState({ isLoading: false })
		}
	}

	componentWillUnmount() {
		Linking.removeEventListener('url', this.handleOpenURL)
	}

	handleOpenURL = event => {
		this.navigate(event.url)
	}

	navigate = url => {
		// eslint-disable-next-line react/prop-types
		let { navigation } = this.props
		const { navigate } = navigation
		const route = url.replace(/.*?:\/\//g, '')
		const id = route.match(/\/([^\/]+)\/?$/)[1]
		const routeName = route.split('/')[0]

		if (routeName === 'people') {
			navigate('People', { id, name: 'chris' })
		}
	}

	async UNSAFE_componentWillReceiveProps() {
		try {
			const user = await Auth.currentAuthenticatedUser()
			this.setState({ user })
		} catch (err) {
			this.setState({ user: {} })
		}
	}
	render() {
		let { loggedIn } = this.state
		if (loggedIn) {
			return <Nav />
		}
		return <Tabs />
	}
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps)(App)
