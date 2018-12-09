/* eslint-disable react/display-name */
import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

import { colors, fonts } from '../theme'
import tools from '../toolList'

// eslint-disable-next-line react/prop-types
export default ({ id }) => (
	<View style={styles.headerView}>
		<Image style={styles.image} source={{ uri: tools[id].img }} />
		<Text style={styles.toolName}>{tools[id].name}</Text>
		<Text style={styles.toolType}>{tools[id].type}</Text>
	</View>
)

const styles = StyleSheet.create({
	toolName: {
		margin: 8,
		padding: 20,
		fontSize: 32,
		fontFamily: fonts.bold,
		color: '#fff',
		backgroundColor: colors.primary
	},
	toolType: {
		margin: 8,
		padding: 10,
		fontSize: 20,
		fontFamily: fonts.base,
		color: '#fff',
		backgroundColor: colors.darkAccent
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
