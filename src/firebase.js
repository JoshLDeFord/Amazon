// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyChy40W-iebdXcWBTOUScyulW3NQy8Fo68",
    authDomain: "clone-418af.firebaseapp.com",
    projectId: "clone-418af",
    storageBucket: "clone-418af.appspot.com",
    messagingSenderId: "172588892175",
    appId: "1:172588892175:web:d4026b9652300fa941a37a",
    measurementId: "G-ZGJRZDJM9Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};