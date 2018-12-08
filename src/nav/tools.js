/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {
	Text,
	ScrollView,
	StyleSheet,
	Image,
	StatusBar,
	View
} from 'react-native'
import PropTypes from 'prop-types'
import { colors, fonts } from '../theme'
import tools from '../toolList'

class Tools extends React.Component {
	componentDidMount() {
		StatusBar.translucent = true
	}

	render() {
		const { navigation } = this.props
		const { id } = navigation.state.params

		if (!tools[id]) return <Text>Sorry, no data exists for this tool</Text>

		return (
			<ScrollView style={styles.background}>
				<View style={styles.headerView}>
					<Image
						style={styles.image}
						source={{ uri: tools[id].img }}
					/>
					<Text style={styles.toolName}>{tools[id].name}</Text>
					<Text style={styles.toolType}>{tools[id].type}</Text>
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#fff'
	},
	toolName: {
		margin: 8,
		padding: 20,
		fontSize: 32,
		textTransform: 'uppercase',
		fontFamily: fonts.bold,
		color: '#fff',
		backgroundColor: colors.primary
	},
	toolType: {
		margin: 8,
		padding: 10,
		fontSize: 20,
		textTransform: 'uppercase',
		fontFamily: fonts.light,
		color: '#fff',
		backgroundColor: '#000'
	},
	image: {
		backgroundColor: '#666',
		flex: 1,
		resizeMode: 'cover',
		position: 'absolute',
		width: '100%',
		height: '100%',
		justifyContent: 'center'
	},
	headerView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column',
		height: 250
	},
	headerGradient: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 300
	}
})

Tools.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}).isRequired
}

export default Tools
