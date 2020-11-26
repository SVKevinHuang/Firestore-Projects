// All firebase use needs to be after the DOM has loaded, to make sure that firebase itself has been loaded
document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();
    
  console.log(app); //Just to make sure it's working

  const db = firebase.firestore();
  const todoRef = db.collection('todos');

  console.log("Your items");

  todoRef.get().then(todos => {
    todos.forEach(doc => {
      data = doc.data();
      console.log(data.title);
    })
  })
})