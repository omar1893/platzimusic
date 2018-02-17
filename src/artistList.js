/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';

import ArtistBox from './artistBox'
import { Actions } from "react-native-router-flux";

export default class ArtistList extends Component<{}> {

  state = {
    artists: []
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props.artists) {
      this.state.artists = newProps.artists
    }
    else {

    }
  }

  handlePress(artist) {
    // console.warn('Click', artist)
    Actions.artistDetail({ artist: artist })
  }

  render() {
    return (
      <FlatList
        data={this.state.artists}
        renderItem={({ item }) =>
          <TouchableOpacity onPress={() => this.handlePress(item)}>
            <ArtistBox artist={item} />
          </TouchableOpacity>}
        keyExtractor={item => item.name}

      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});

