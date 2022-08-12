import './style.css';
import Tasks from './modules/Tasks.js';

// Initiate Tasks class
const tasksCl = new Tasks();

const todoUl = document.getElementById('todo-ul');


// tasksCl.allTasks.forEach((task) => {
//   const liB = document.createElement('li');
//   liB.setAttribute('id', `id${task.taskIndex}`);
//   const x = document.createElement('INPUT');
//   x.setAttribute('type', 'checkbox');
//   liB.appendChild(x);
//   const p = document.createElement('p');
//   p.setAttribute('id', `p${task.taskIndex}`);
//   p.innerHTML = task.taskDesc;
//   liB.appendChild(p);

//   const i = document.createElement('i');
//   i.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
//   liB.appendChild(i);

//   todoUl.appendChild(liB);
// });

const liClear = document.createElement('li');
liClear.setAttribute('id', 'clearList');
const pClear = document.createElement('p');
pClear.innerHTML = 'Clear all completed';
liClear.appendChild(pClear);
todoUl.appendChild(liClear);
const clearTodo = document.getElementById('clearList');

const addTask = document.getElementById('add-task');
const addIcon = document.getElementById('add-icon');

let currentIndex = 0
addIcon.addEventListener('click', () => {
  tasksCl.newTask(addTask.value, false, currentIndex);

  const liB = document.createElement('li');
  liB.setAttribute('id', `id${tasksCl.allTasks[currentIndex].index}`);
  const x = document.createElement('INPUT');
  x.setAttribute('type', 'checkbox');
  liB.appendChild(x);
  const p = document.createElement('p');
  p.setAttribute('id', `p${tasksCl.allTasks[currentIndex].index}`);
  p.innerHTML = tasksCl.allTasks[currentIndex].desc;
  liB.appendChild(p);

  const i = document.createElement('i');
  i.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
  liB.appendChild(i);

  todoUl.insertBefore(liB, clearTodo);

  currentIndex++;
})

