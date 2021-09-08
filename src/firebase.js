import firebase from 'firebase';


const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyC6AP6c1PXeTcnxXpowuGqF9u2wRp072jA",
  authDomain: "insta-clone-7b502.firebaseapp.com",
  projectId: "insta-clone-7b502",
  storageBucket: "insta-clone-7b502.appspot.com",
  messagingSenderId: "471346871080",
  appId: "1:471346871080:web:a643cf32e89414d8d96e1d",
  measurementId: "G-5M1130Y59T"
})

const db= firebaseApp.firestore();
const auth= firebase.auth();
const storage=firebase.storage();

export {db,auth,storage};