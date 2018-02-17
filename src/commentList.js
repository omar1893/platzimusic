import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList, 
} from 'react-native';

import Comment from "./comment";

export default class CommentsList extends Component<{}> {

  state = {
    comments: []
  }

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps !== this.props.comments) {
      this.state.comments = newProps.comments
    }
    else {

    }
  }
  
  render() {
    return (
      <FlatList
        data={this.state.comments}
        renderItem={({ item }) =>
            <Comment text={item.text} avatar={item.userPhoto}/>}
        keyExtractor={item => item.uid}
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