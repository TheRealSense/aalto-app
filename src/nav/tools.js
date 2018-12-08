/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import {
	Text,
	ScrollView,
	StyleSheet,
	StatusBar,
	FlatList,
	LinkingIOS
} from 'react-native'
import PropTypes from 'prop-types'
// import { colors, fonts } from '../theme'
import tools from '../toolList'
import ToolHeader from '../components/ToolHeader'

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
				<ToolHeader id={id} />
				<FlatList
					data={tools[id].info}
					renderItem={({ item }) =>
						item.info.forEach(element => {
							<Text
								style={styles.item}
								onPress={() => LinkingIOS.openURL(element.url)}
							>
								{item.desc}
							</Text>
						})
					}
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
		color: '#0088EE'
	}
})

Tools.propTypes = {
	navigation: PropTypes.shape({
		navigate: PropTypes.func.isRequired
	}).isRequired
}

export default Tools
