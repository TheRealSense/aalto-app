import React from 'react'
import { View, Image, TextInput, StyleSheet, Animated } from 'react-native'

class SearchBox extends React.Component {
	state = {
		fadeAnim: new Animated.Value(1),
		text: ''
	}

	_fadeOutPlaceholder = () => {
		const { fadeAnim } = this.state
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 200
		}).start()
	}
	_fadeInPlaceholder = () => {
		const { text, fadeAnim } = this.state
		if (text === '') {
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 200
			}).start()
		}
	}

	render() {
		let { fadeAnim, text } = this.state

		return (
			<View style={styles.searchbox}>
				<Animated.Text
					style={[styles.placeholder, { opacity: fadeAnim }]}
				>
					<Image
						source={require('../assets/icons/ios-search.png')}
						style={{ width: 14, height: 14, top: 4 }}
					/>{' '}
					Search
				</Animated.Text>
				<TextInput
					onFocus={this._fadeOutPlaceholder}
					onBlur={this._fadeInPlaceholder}
					onChangeText={text => this.setState({ text })}
					value={text}
					style={styles.textInput}
					clearButtonMode="while-editing"
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	searchbox: {
		backgroundColor: 'rgba(0,0,0,0.1)',
		height: 28,
		borderRadius: 4,
		margin: 15,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	placeholder: {
		position: 'absolute',
		color: '#8E8E93',
		fontSize: 14
	},
	textInput: {
		paddingLeft: 5,
		paddingRight: 5,
		width: 100 + '%'
	}
})

export default SearchBox
