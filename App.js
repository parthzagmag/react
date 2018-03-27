// MyComponent.js
import React, { Component } from 'react';
import {Text, View } from 'react-native';
import My1, {FixedDimensionsBasics, FlexDimensionsBasics} from './My';

class MyComponent extends Component {
  render() {
	const {myState} = this.state || {};
    const message = `The current state is ${myState}.`;  
	  
    return (
      <FlexDimensionsBasics/>
    );
  }
}

export default MyComponent;