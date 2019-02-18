import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDlh_g6b3NHwM5CwIg-pWXZWLjkHP6w0jo",
  authDomain: "jeudi-56009.firebaseapp.com",
  databaseURL: "https://jeudi-56009.firebaseio.com",
  projectId: "jeudi-56009",
  storageBucket: "jeudi-56009.appspot.com",
  messagingSenderId: "966300121184"
};

firebase.initializeApp(config);
