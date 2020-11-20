// All firebase use needs to be after the DOM has loaded, to make sure that firebase itself has been loaded
document.addEventListener("DOMContentLoaded", event => {


  
})

function addTodo(e){
  alert('test');
  //prevents refresh
  // e.preventDefault();
  // const db = firebase.firestore();
  // const todoRef = db.collection('todos');
  // todoRef.add({title = e.target.value});
}