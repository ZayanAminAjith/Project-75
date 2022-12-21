import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAcVjvQza3fnTjvuHgn6yZq-nV_bdV2ZRA",
  authDomain: "project-71-4b35d.firebaseapp.com",
  projectId: "project-71-4b35d",
  storageBucket: "project-71-4b35d.appspot.com",
  messagingSenderId: "978098716968",
  appId: "1:978098716968:web:f7a88f1f8b6d47f6e2901d"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
