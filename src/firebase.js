import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// *** USE YOUR CONFIG OBJECT ***
const firebaseConfig = {
    apiKey: "AIzaSyAmAedTh3p9F1U4tirTwaKK7MUKvkbjtyw",
    authDomain: "flix-738f0.firebaseapp.com",
    projectId: "flix-738f0",
    storageBucket: "flix-738f0.appspot.com",
    messagingSenderId: "587737066650",
    appId: "1:587737066650:web:e344e6bd80328f5a05c323"
};

firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;