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

  useEffect(() => {
    firebase.firestore().collection("todos").get().then(snapshot => {
      const newTodos = [];
      snapshot.docs.map((doc) => {
        newTodos.push({
          title: doc.data().title,
          id: doc.id
        });
      })
      console.log(newTodos);
      setTodos(newTodos);
    })
    console.log("useEffect called");
  }, []);
  //return [] so useEffect is only called on the initial render

  let handleSubmit = (e) => {
    //Puts data on firebase
    e.preventDefault();
    firebase.firestore().collection("todos").add({
      title: inputValue
    })
  };

  let deleteTodoById = (id) => {
    firebase.firestore().collection("todos").doc(id).delete();
  }

  return (
    <div className="App">
      <header className="App-header">
        <ul className="todoList">
          {todos.map((todo) => {
            return (
              <li key = {todo.id}>
                <p>
                  {todo.title}
                </p>
                <button onClick={() => deleteTodoById(todo.id)}>
                  ❌
                </button>
              </li>);
          })}
        </ul>
        
        <form onSubmit={handleSubmit}>
          <input value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} />
        </form>
      </header>
    </div>
  );
}

export default App;
