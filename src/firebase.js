import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdCXiYHX6_z6hZEzNKc657NuJii_j_piI",
  authDomain: "react-hooks-blog-f87cf.firebaseapp.com",
  projectId: "react-hooks-blog-f87cf",
  storageBucket: "react-hooks-blog-f87cf.appspot.com",
  messagingSenderId: "12924367381",
  appId: "1:12924367381:web:7e95def412c385c85e541c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore=firebase.firestore();