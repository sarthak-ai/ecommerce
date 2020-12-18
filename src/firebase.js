// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDRYSPi6ieR6m_y9bhs79MKkNh7D7snlpM",
    authDomain: "ecommerce-98f04.firebaseapp.com",
    databaseURL: "https://ecommerce-98f04.firebaseio.com",
    projectId: "ecommerce-98f04",
    storageBucket: "ecommerce-98f04.appspot.com",
    messagingSenderId: "463442072826",
    appId: "1:463442072826:web:1c1832487a64b0e884e543",
    measurementId: "G-2D9Y7W36TW"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth();
  export {db, auth};