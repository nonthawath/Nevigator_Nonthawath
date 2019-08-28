import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
//import StackNavigator from './Stack/StackNavigator.js';
import SwitchNevigator from './switch/switchnavigator.js'


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1,marginTop:20}}>
        <SwitchNevigator/>
      </View>
    );
  }
}
