import React from 'react'

import { View, ScrollView, StyleSheet, FlatList } from 'react-native'

// eslint-disable-next-line react/prop-types
const HorizontalScrollView = ({ renderItem, keyExtractor, data }) => {
	return (
		<View>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<FlatList
					style={styles.innerScroll}
					horizontal
					data={data}
					renderItem={renderItem}
					keyExtractor={keyExtractor}
				/>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	innerScroll: {
		padding: 15,
		flexDirection: 'row'
	}
})

export default HorizontalScrollView
