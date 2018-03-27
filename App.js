// MyComponent.js
import React, { Component } from 'react';
import {Text, View } from 'react-native';
import My1 from './My';

class MyComponent extends Component {
  render() {
	const {myState} = this.state || {};
    const message = `The current state is ${myState}.`;  
	  
    return (
	  <View>
      <Text>This is my component.</Text>
	  <Text>{message}</Text>
	  <My1/>
	  </View>
    );
  }
}

export default MyComponent;