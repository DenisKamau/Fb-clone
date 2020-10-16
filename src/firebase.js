import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7PPBMbNlQ2gk4r38VkIfWqbnS57d0pHE",
  authDomain: "fb-clone-690d2.firebaseapp.com",
  databaseURL: "https://fb-clone-690d2.firebaseio.com",
  projectId: "fb-clone-690d2",
  storageBucket: "fb-clone-690d2.appspot.com",
  messagingSenderId: "112818605252",
  appId: "1:112818605252:web:60cadc6b76e4bc76804d91",
  measurementId: "G-2JTNR855QL",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
