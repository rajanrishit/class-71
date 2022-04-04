import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDb-nrGsRFa3yPBTOYWwYcqxVi3NLsmmdM",
  authDomain: "e-library-e884b.firebaseapp.com",
  projectId: "e-library-e884b",
  storageBucket: "e-library-e884b.appspot.com",
  messagingSenderId: "317909346854",
  appId: "1:317909346854:web:1b04b94b4aab00196114e7"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
