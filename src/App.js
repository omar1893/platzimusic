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

import HomeView from './home-view'
import ArtistDetailView from './artistDetail'
import LoginView from './loginView'
import { Router, Scene, Stack } from "react-native-router-flux";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//   'Cmd+D or shake for dev menu',
//   android: 'Haz doble tap en la tecla R en tu teclado para recargar,\n' +
//   'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={LoginView} hideNavBar />
          <Scene key="home" component={HomeView} hideNavBar />
          <Scene key="artistDetail" component={ArtistDetailView} title="Comentarios" hideNavBar={false} />
        </Stack>
      </Router>
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
