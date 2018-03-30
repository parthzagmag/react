import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

   onPressButton2() {
    Alert.alert('You presses button in row no _')
  }
  
  render() {
    return (
      <View style={styles.container}>
        
		<View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me big blue"
          />
        </View>
		
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Press Me big marun"
            color="#841584"
          />
        </View>
		
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this.onPressButton2}
            title="This looks great!"
          />
          <Button
            onPress={this.onPressButton2}
            title="OK!"
            color="#841584"
          />
        </View>
		
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  
  buttonContainer: {
    margin: 20
  },
  
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
  
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);
