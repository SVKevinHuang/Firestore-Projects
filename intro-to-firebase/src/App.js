import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';

import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBRh7yNmkd5q-jZ3HzULJqxc2SjuXrYiPU",
  authDomain: "testnov19-841f6.firebaseapp.com",
  databaseURL: "https://testnov19-841f6.firebaseio.com",
  projectId: "testnov19-841f6",
  storageBucket: "testnov19-841f6.appspot.com",
  messagingSenderId: "381255299067",
  appId: "1:381255299067:web:118e672d07c1a59d7b255e",
  measurementId: "G-1MQKYYHVTT"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [firebaseText, setFirebaseText] = useState("");

  firebase.firestore().collection("memo").doc("test").get().then(doc => {
    console.log(doc.data());
    setFirebaseText(doc.data().text);
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {firebaseText}
        </p>
      </header>
    </div>
  );
}

export default App;
