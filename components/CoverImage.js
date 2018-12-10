/* eslint-disable react/prop-types */
import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const CoverImage = ({ source, size }) => {
	return (
		<View style={[styles.profileCover, { height: size ? size : 350 }]}>
			<Image
				style={[
					styles.profileCoverImage,
					{ height: size ? size : 350 }
				]}
				source={{ uri: source }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	profileCover: {
		height: 350,
		position: 'absolute',
		width: 100 + '%'
	},
	profileCoverGradient: {
		height: 350,
		width: 100 + '%',
		position: 'absolute'
	},
	profileCoverImage: {
		height: 350,
		width: 100 + '%',
		position: 'absolute'
	}
})

export default CoverImage
