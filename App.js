import React, { Component } from 'react';
import { AppRegistry, ScrollView, View, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
      return (
        <ScrollView>		
          <Text style={{fontSize:96}}>Scroll me plz 1</Text>
		  <Text style={{fontSize:96}}>Scroll me plz 2</Text>
		  <Text style={{fontSize:96}}>Scroll me plz 3</Text>
		  <Text style={{fontSize:96}}>Scroll me plz 4</Text>
		  <Text style={{fontSize:96}}>Scroll me plz 5</Text>
          <Text style={{fontSize:80}}>React Native End</Text>
        </ScrollView>
    );
  }
}
