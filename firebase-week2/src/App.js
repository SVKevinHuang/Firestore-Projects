import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

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
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(()=>{
    firebase.firestore().collection("todos").get().then(snapshot => {
      const newTodos = [];
      snapshot.docs.map((doc) => {
        newTodos.push(doc.data().title);
      })
      console.log(newTodos);
      setTodos(newTodos);
    })
    console.log("useEffect called");
  }, []);
  //return [] so useEffect is only called on the initial render

  return (
    <div className="App">
      <header className="App-header">
        <ul>
        {todos.map((todo) => {
          return( <li> {todo} </li>);
        })}
        </ul>
        <form onSubmit={(e) => {
          //Puts data on firebase
          e.preventDefault();
          firebase.firestore().collection("todos").add({
            title: inputValue
          })
        }}>
          <input value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} />
        </form>
      </header>
    </div>
  );
}

export default App;
