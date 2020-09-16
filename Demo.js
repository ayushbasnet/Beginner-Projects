//Selectors

const todoInput = document.querySelector('.toDoInput');
const todoButton = document.querySelector('.toDoButton');
const todoList = document.querySelector('.toDoList');

//Events Listeners
todoButton.addEventListener('click', addTodo);

//functions
function addTodo(event) {
  //Prevent Form From Submitting
  event.preventDefault();

  //Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  //Create LI
  const newTodo = document.createElement('li');
  newTodo.innerText = 'hey';
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //Check mark
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class = "fas fa-check"></i>';
  completedButton.classList.add('completed-btn');
  todoDiv.appendChild(completedButton);

  //Trash mark
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add('completed-btn');
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);
}
