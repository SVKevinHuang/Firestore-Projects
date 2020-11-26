// All firebase use needs to be after the DOM has loaded, to make sure that firebase itself has been loaded
document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
    
  console.log(app); //Just to make sure it's working

  const db = firebase.firestore();
  const todoRef = db.collection('todos');

  console.log("Your items");

  todoRef.onSnapshot(todos => {
    todos.forEach(doc => {
      data = doc.data();
      console.log(data.title);
    })
  })
})

//using listener instead of onSubmit to prevent default (page refresh)
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  newTodoTitle = document.getElementById("input").value;
  const db = firebase.firestore();
  const todoRef = db.collection('todos');
  todoRef.add({title : newTodoTitle});
});