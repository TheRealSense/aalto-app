/* eslint-disable no-useless-escape */
import React from 'react'
import { StatusBar } from 'react-native'

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

		StatusBar.setHidden(true)

		try {
			const user = await Auth.currentAuthenticatedUser()
			this.setState({ user, isLoading: false })
		} catch (err) {
			this.setState({ isLoading: false })
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
