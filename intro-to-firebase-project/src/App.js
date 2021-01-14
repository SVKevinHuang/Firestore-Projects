import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, useEffect } from 'react';

import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDjCX_D8zdmb_IEcPIcNwBnVKPe3CLBiy4",
  authDomain: "react-fire-test-c197c.firebaseapp.com",
  projectId: "react-fire-test-c197c",
  storageBucket: "react-fire-test-c197c.appspot.com",
  messagingSenderId: "363569106249",
  appId: "1:363569106249:web:a005e4e4406e23154a1e98",
  measurementId: "G-H77WVB2ZQ6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    firebase.firestore().collection("memo").doc("test").get().then(doc => {
      console.log(doc.data());
      setInputValue(doc.data().text);
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit = {(e) => {
          //Puts data on firebase
          e.preventDefault();
          firebase.firestore().collection("memo").doc("test").set({
            text: inputValue
          })
        }}>
          <input value={inputValue} onChange={(e) => {setInputValue(e.target.value);}}/>
        </form>
      </header>
    </div>
  );
}

export default App;
