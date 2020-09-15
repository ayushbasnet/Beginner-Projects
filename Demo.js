//Selectors

const todoInput = document.queryselector('.toDoInput');
const todoButton = document.queryselector('.toDoButton');
const todoList = document.queryselector('.toDoList');

//Events Listeners
todoButton.addEventListener('click', addTodo);

//functions
function addTodo(event) {
  //Prevent Form From Submitting

  event.preventDefault();
  console.log();
}
