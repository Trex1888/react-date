import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDN8BxSmBhz9NsmtkryCdQ8eVJUGPvOn2c",
  authDomain: "tinder-clone-21344.firebaseapp.com",
  databaseURL: "https://tinder-clone-21344.firebaseio.com",
  projectId: "tinder-clone-21344",
  storageBucket: "tinder-clone-21344.appspot.com",
  messagingSenderId: "514165303021",
  appId: "1:514165303021:web:aa2c3ffe836377a93d4ee4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
