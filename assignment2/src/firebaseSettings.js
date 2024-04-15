// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv2H6ZiUHIDV_VMmSpyk30krdKQIhz99s",
  authDomain: "assign2react.firebaseapp.com",
  databaseURL: "https://assign2react-default-rtdb.firebaseio.com",
  projectId: "assign2react",
  storageBucket: "assign2react.appspot.com",
  messagingSenderId: "910316810032",
  appId: "1:910316810032:web:405b27ebe6b64d03a4a2f5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  console.log("google btn clicked");
  signInWithPopup(auth, provider)
};
