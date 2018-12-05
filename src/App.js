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
	}

	async componentDidMount() {
		// let { user } = this.state


		try {
			const user = await Auth.currentAuthenticatedUser()
			this.setState({ user, isLoading: false })
			if (user.username) {
				StatusBar.setHidden(true)
				if (Platform.OS === 'android') {
					Linking.getInitialURL().then(url => {
						this.navigate(url)
					})
				} else {
					Linking.addEventListener('url', this.handleOpenURL)
				}
			}
		} catch (err) {
			this.setState({ isLoading: false })
		}
	}

	componentWillUnmount() {
		Linking.removeEventListener('url', this.handleOpenURL)
	}

	handleOpenURL = event => {
		//console.warn('handleOpenURL')
		this.navigate(event.url)
	}

	navigate = url => {

		//console.warn('navigating')

		// eslint-disable-next-line react/prop-types
		// let { navigation } = this.props

		const route = url.replace(/.*?:\/\//g, '')
		// const id = route.match(/\/([^\/]+)\/?$/)[1]
		const routeName = route.split('/')[0]

		if (routeName === 'tools') {
			// console.warn(`${navigation.navigate}`)
			// navigation.navigate('Tools', { id, name: 'printer' })
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
		const { isLoading, user } = this.state

		if (isLoading) return null
		let loggedIn = false
		if (user.username) {
			loggedIn = true
		}
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
