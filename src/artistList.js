/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList
} from 'react-native';

import ArtistBox from './artistBox'


export default class ArtistList extends Component<{}> {

  render() {

    const artist = [
      {
        'image': 'http://www.billboard.com/files/media/beatles-sgt-peppers-07-billboard-1548.jpg',
        'name': "The Beatles",
        'likes': 200,
      },
      {
        'image': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Trs_20150623_milwaukee_jp_105.jpg',
        'name': "Rolling Stones",
        'likes': 200,
      },
      {
        'image': 'http://www.revistapym.com.co/wp-content/uploads/2016/11/guns_and_roses_historia_logo.png',
        'name': "Guns N Roses",
        'likes': 200,
      },
      {
        'image': 'http://plus.cusica.com/wp-content/uploads/2017/04/Green-Day-cusica-plus.jpg',
        'name': "Green Day",
        'likes': 200,
      },
      {
        'image': 'http://www.billboard.com/files/media/beatles-sgt-peppers-07-billboard-1548.jpg',
        'name': "The Beatles",
        'likes': 200,
      },
      {
        'image': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Trs_20150623_milwaukee_jp_105.jpg',
        'name': "Rolling Stones",
        'likes': 200,
      },
      {
        'image': 'http://www.revistapym.com.co/wp-content/uploads/2016/11/guns_and_roses_historia_logo.png',
        'name': "Guns N Roses",
        'likes': 200,
      },
      {
        'image': 'http://plus.cusica.com/wp-content/uploads/2017/04/Green-Day-cusica-plus.jpg',
        'name': "Green Day",
        'likes': 200,
      },
      {
        'image': 'http://www.billboard.com/files/media/beatles-sgt-peppers-07-billboard-1548.jpg',
        'name': "The Beatles",
        'likes': 200,
      },
      {
        'image': 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Trs_20150623_milwaukee_jp_105.jpg',
        'name': "Rolling Stones",
        'likes': 200,
      },
      {
        'image': 'http://www.revistapym.com.co/wp-content/uploads/2016/11/guns_and_roses_historia_logo.png',
        'name': "Guns N Roses",
        'likes': 200,
      },
      {
        'image': 'http://plus.cusica.com/wp-content/uploads/2017/04/Green-Day-cusica-plus.jpg',
        'name': "Green Day",
        'likes': 200,
      },
    ]


    return (
        <FlatList
          data={artist}
          renderItem={({ item }) => <ArtistBox artist={item}/>}
          keyExtractor={item => item.name}
          />
    );
  }
}

