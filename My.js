import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles1.red}>just red</Text>
        <Text style={styles1.bigblue}>just bigblue</Text>
        <Text style={[styles1.bigblue, styles1.red]}>bigblue, then red</Text>
        <Text style={[styles1.red, styles1.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
	
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  
  red: {
    color: 'red',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => LotsOfStyles);
