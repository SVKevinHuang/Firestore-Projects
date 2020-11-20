// All firebase use needs to be after the DOM has loaded, to make sure that firebase itself has been loaded
document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
    
  console.log(app); //Just to make sure it's working

  const db = firebase.firestore();
  const todoRef = db.collection('todos');
  const todoList = document.getElementById("todos");

  todoRef.onSnapshot(todos => {

    //To clear the items wrote from previous updates
    while (todoList.firstChild)
      todoList.removeChild(todoList.firstChild);

    todos.forEach(doc => {
      data = doc.data();
      li = document.createElement('li');
      li.textContent = data.title;
      todoList.appendChild(li);
    })
  })
})

//using listener instead of 
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  newTodoTitle = document.getElementById("input").value;
  console.log(newTodoTitle);
  const db = firebase.firestore();
  const todoRef = db.collection('todos');
  todoRef.add({title : newTodoTitle});
});