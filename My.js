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

export class FixedDimensionsBasics extends Component {
  render() {
    return (
      <View>
        <View style={size_style.fifty_sq} />
        <View style={size_style.hundred_sq} />
        <View style={size_style.onefifty_sq} />
      </View>
    );
  }
}

export class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={flex_style.one} />
        <View style={flex_style.two} />
        <View style={flex_style.three} />
      </View>
    );
  }
}

const flex_style = StyleSheet.create({
	
 one: {flex: 1, backgroundColor: 'powderblue'},
 two: {flex: 2, backgroundColor: 'skyblue'},
 three: {flex: 3, backgroundColor: 'steelblue'},
 
});
 
 const size_style =  StyleSheet.create({
	
	fifty_sq: {
		width: 50,
		height: 50,
		backgroundColor: 'powderblue',
	},
	
	hundred_sq: {
		width: 100,
		height: 100,
		backgroundColor: 'skyblue',
	},
	
	onefifty_sq: {
		width: 150,
		height: 150,
		backgroundColor: 'steelblue',
	},
	
});
	
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


