/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {
	Text,
	ScrollView,
	StyleSheet,
	FlatList,
} from 'react-native'
import PropTypes from 'prop-types'
import { fonts } from '../theme'
import tools from '../toolList'
import ToolHeader from '../components/ToolHeader'

class Tools extends React.Component {

	render() {
		const { navigation } = this.props
		const { id } = navigation.state.params

		if (!tools[id]) return <Text>Sorry, no data exists for this tool</Text>

		return (
			<ScrollView style={styles.background}>
				<ToolHeader id={id} />
				<Text style={styles.headline}>Help to get started</Text>
				<FlatList
					data={tools[id].info}
					renderItem={({ item }) => (
						<Text
							style={styles.item}
							onPress={() => navigation.navigate('WebView', { uri: item.url})}
						>
							{`${item.desc} →`}
						</Text>
					)}
					keyExtractor={(item, index) => index.toString()}
				/>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#fff'
	},
	item: {
		fontSize: 18,
		margin: 10,
		color: '#0088EE'
	},
	headline: {
		marginLeft: 10,
		marginTop: 20,
		marginBottom: 10,
		fontSize: 28,
		fontFamily: fonts.bold
	}
})

Tools.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}).isRequired
}

export default Tools
