import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDK87-LoZ6y1iPl7cIWMTQ2s1DAxPTt3PY",
    authDomain: "color-crusher-fa181.firebaseapp.com",
    projectId: "color-crusher-fa181",
    storageBucket: "color-crusher-fa181.appspot.com",
    messagingSenderId: "570070445008",
    appId: "1:570070445008:web:33c91952390a18d8d227d5",
    measurementId: "G-F6BNQCCWXX"
  };

  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  export default firebase;
