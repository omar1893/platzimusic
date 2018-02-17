import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './artistBox'
import ArtistList from './artistList'
import { getArtists } from './api-client'

export default class HomeView extends Component<{}> {

  state = {
    artists: []
  }

  componentDidMount() {
    getArtists()
      .then(data => this.setState({ artists: data }))
  }

  render() {
    const artists = this.state.artists
    // console.warn(artists)

    return (
      <View style={styles.container}>
        <ArtistList artists={artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 10
  },
});
