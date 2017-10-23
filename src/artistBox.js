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
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Haz doble tap en la tecla R en tu teclado para recargar,\n' +
  'Shake or press menu button for dev menu',
});

export default class ArtistBox extends Component<{}> {

  render() {

    const {image, likes, name} = this.props.artist

    return (
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}>
            <Text style={styles.text}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="md-heart-outline" size={30} color="lightgray" />
                <Text>{likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="md-chatboxes" size={30} color="lightgray"/>
                <Text>{likes}</Text>
              </View>
            </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150
  },
  artistBox: {
    backgroundColor: 'white',
    flexDirection: 'row',
    elevation: 3,
    margin: 5
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginTop: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginHorizontal: 20
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  }
});
