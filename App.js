import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import Entry from './src/components/Entry'
import {  Text, View } from 'react-native';

import styles from './src/styles/style'

class App extends Component {
render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app !</Text>
      <Text> Richard </Text>
      <Entry />

    </View>
  );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

export default App;