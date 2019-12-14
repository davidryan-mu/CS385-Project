import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyALojfBmPYjhzNoGYkMi9HnhYUvqybdYjc",
  authDomain: "triton-career-finder.firebaseapp.com",
  databaseURL: "https://triton-career-finder.firebaseio.com",
  storageBucket: "triton-career-finder.appspot.com",
  messagingSenderId: "131690415993"
};
var fire = firebase.initializeApp(config);
export default fire;