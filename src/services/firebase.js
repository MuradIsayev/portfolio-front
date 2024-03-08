// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
