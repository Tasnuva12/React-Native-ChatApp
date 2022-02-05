import React from "react";
import navigation from './src/navigate/navigation';
import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBEOqUXN1pk8hePiudy0CF5K_ei5ChR94E",
  authDomain: "chatapp-f92ef.firebaseapp.com",
  projectId: "chatapp-f92ef",
  storageBucket: "chatapp-f92ef.appspot.com",
  messagingSenderId: "480626508359",
  appId: "1:480626508359:web:7598b57593eb8de2176762"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

 function App() {
  return (
    <navigation/>
  );
}


export default App;