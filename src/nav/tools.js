import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'


// Hard coded object for development purposes. 
// This will be replaced by a object requested from the server.
const tools = {
	0: {
		name: '3d-printer'
	},
	1: {
		name: 'Large format printer'
	},
	2: {
		name: 'Sewing machine'
	},
	3: {
		name: 'Saw'
	}
}

class Tools extends React.Component {
	static navigationOptions = {
		title: 'Tools'
	}
	render() {
		const { navigation } = this.props
		const { id } = navigation.state.params
		if (!tools[id]) return <Text>Sorry, no data exists for this tool</Text>

		return (
			<View>
				<Text style={styles.text}>{tools[id].name}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	text: {
		margin: 19,
		fontSize: 22
	}
})

Tools.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}).isRequired
}

export default Tools
