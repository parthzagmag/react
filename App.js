import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class SimpleButton extends Component {
	render() {
		return( 
		    <View>
				<Button onPress={() => { Alert.alert('You tapped the button!'); }} title="Press Me" /> 
			</View>	
		);
	}
}

