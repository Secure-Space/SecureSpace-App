import {initializeAuth} from "firebase/auth";
import * as firebase from 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/database';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let app;
  const firebaseConfig = {
    apiKey: "AIzaSyBzCFdCbx0v6_Q4R0aEBP2YCWZshQWKqtY",
    authDomain: "space-d2991.firebaseapp.com",
    projectId: "space-d2991",
    storageBucket: "space-d2991.appspot.com",
    messagingSenderId: "582112885234",
    appId: "1:582112885234:web:29e9d53894bc7bbb76d36b",
    measurementId: "G-D6J6R3B59G",
  };


if (firebase.getApps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = firebase.app();

}

export default firebase;



