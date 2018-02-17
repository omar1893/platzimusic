import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAPs0VgSzJjfokxAtF4EZ0UcHUIpFA3OSA",
    authDomain: "platzimusic-a40ca.firebaseapp.com",
    databaseURL: "https://platzimusic-a40ca.firebaseio.com",
    projectId: "platzimusic-a40ca",
    storageBucket: "platzimusic-a40ca.appspot.com",
    messagingSenderId: "304156497367"
};
firebase.initializeApp(config);

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();
export default firebase