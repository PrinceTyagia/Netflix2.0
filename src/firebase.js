import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBUSSG6p7jAos-Pwl3Hm90XSv6rb2oiBnc",
  authDomain: "netflix-clone-536ad.firebaseapp.com",
  projectId: "netflix-clone-536ad",
  storageBucket: "netflix-clone-536ad.appspot.com",
  messagingSenderId: "829317843498",
  appId: "1:829317843498:web:b19f7d3873138f70a3d153",
};
// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
