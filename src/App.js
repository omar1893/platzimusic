/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './artistBox'
import ArtistList from './artistList'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//   'Cmd+D or shake for dev menu',
//   android: 'Haz doble tap en la tecla R en tu teclado para recargar,\n' +
//   'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {

  render() {

    return (
      <View style={styles.container}>
        <ArtistList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  },
});
