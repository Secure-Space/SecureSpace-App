import {initializeAuth} from "firebase/auth";
import * as firebase from 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/database';
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let app;
const firebaseConfig = {
    apiKey: "AIzaSyDI2ypIWM9qR-os2gzf1eQs9iI4fdG6j3E",
    authDomain: "aethermarshal.firebaseapp.com",
    projectId: "aethermarshal",
    storageBucket: "aethermarshal.appspot.com",
    messagingSenderId: "939424439975",
    appId: "1:939424439975:web:e870f0e27d22fecd054582",
    measurementId: "G-CQBSS869NX"
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



