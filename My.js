import React, { Component } from 'react';
import {Text} from 'react-native';

class My extends Component {
  render() {
    return (
           <Text>Called from other component 'my'</Text>
    );
  }
}

export default My;
