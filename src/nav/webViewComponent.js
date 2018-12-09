/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import { WebView } from 'react-native'
import PropTypes from 'prop-types'

class WebViewComponent extends Component {
	render() {
		const { navigation } = this.props
		const { uri } = navigation.state.params

		return (
			<WebView
				source={{ uri: uri }}
				useWebKit
			/>
		)
	}
}

WebViewComponent.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}).isRequired
}

export default WebViewComponent
