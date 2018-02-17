import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';

import ArtistBox from './artistBox'
import Icon from 'react-native-vector-icons/Ionicons';
import { getArtists } from './api-client'
import { firebaseDatabase, firebaseAuth } from "./firebase";
import CommentsList from "./commentList";

export default class ArtistDetailView extends Component<{}> {
    state = {
        comments: []
    }

    handleSend = () => {
        const text = this.state.text
        const { uid, photoURL } = firebaseAuth.currentUser
        const artistComments = this.getArtistComments()
        var newComment = artistComments.push();
        newComment.set({
            text,
            userPhoto: photoURL,
            uid
        });
        this.setState({text: ''})
    }

    getArtistComments = () => {
        const { id } = this.props.artist
        return firebaseDatabase.ref(`comments/${id}`)
    }

    componentDidMount = () => {
        this.getArtistComments().on('child_added', this.addComment);
    }

    componentWillUnmount() {
        this.getArtistComments().off('child_added', this.addComment)
    }

    addComment = (data) => {
        const comment = data.val()
        this.setState({ comments: this.state.comments.concat(comment) })
    }

    handleChangeText = (text) => {
        this.setState({ text })
    }

    render() {
        const artist = this.props.artist
        // console.warn("state: ",this.state)
        const comments = this.state.comments
        return (
            <View style={styles.container}>
                <ArtistBox artist={artist} />
                <CommentsList comments={comments} />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={this.state.text}
                        placeholder="Opina sobre este artista"
                        onChangeText={this.handleChangeText}
                    />
                    <TouchableOpacity onPress={this.handleSend}>
                        <Icon name="md-send" size={30} color="blue" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 10,
    },
    inputContainer: {
        height: 50,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        height: 50,
        flex: 1
    }
});
