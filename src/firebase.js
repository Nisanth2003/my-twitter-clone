import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDYpcijBffBHsq5Vz1XHLvDEPXQyi5LzJ0",
    authDomain: "my-twitter-clone-3ec6e.firebaseapp.com",
    projectId: "my-twitter-clone-3ec6e",
    storageBucket: "my-twitter-clone-3ec6e.appspot.com",
    messagingSenderId: "741992263545",
    appId: "1:741992263545:web:7448c8f00884727bd809a8",
    measurementId: "G-J6FLMEBK3M"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };