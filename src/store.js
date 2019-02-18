import firebase from "firebase/app";
import { createStore, combineReducers, compose } from "redux";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Create store with reducers and initial state
const initialState = {};
export default createStore(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  )
);
