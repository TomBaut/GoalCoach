import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAQOqQGh4XpAI7_3zkNZ2510zj-WhxSb5g",
    authDomain: "goalcoach-ce97f.firebaseapp.com",
    databaseURL: "https://goalcoach-ce97f.firebaseio.com",
    projectId: "goalcoach-ce97f",
    storageBucket: "goalcoach-ce97f.appspot.com",
    messagingSenderId: "650288320187"
};

export const firebaseApp = firebase.initializeApp(config);
