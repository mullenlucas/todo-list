import './style.css';
import Tasks from './modules/Tasks.js';
// Initiate Tasks class
const tasksCl = new Tasks();

// Load example tasks to the class
const exampleTasks = [
  {
    description: 'Complete a daily challenge',
    completed: true,
    index: 1,
  },
  {
    description: 'Update and polish projects',
    completed: false,
    index: 2,
  },
  {
    description: 'Respond e-mails',
    completed: true,
    index: 3,
  },
];

exampleTasks.forEach((t) => {
  tasksCl.newTask(t.description, t.completed, t.index);
});

const todoUl = document.getElementById('todo-ul');

tasksCl.allTasks.forEach((task) => {
  const liB = document.createElement('li');
  liB.setAttribute('id', `id${task.taskIndex}`);
  const x = document.createElement('INPUT');
  x.setAttribute('type', 'checkbox');
  liB.appendChild(x);
  const p = document.createElement('p');
  p.setAttribute('id', `p${task.taskIndex}`);
  p.innerHTML = task.taskDesc;
  liB.appendChild(p);

  const i = document.createElement('i');
  i.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
  liB.appendChild(i);

  todoUl.appendChild(liB);
});

const liClear = document.createElement('li');
liClear.setAttribute('id', 'clearList');
const pClear = document.createElement('p');
pClear.innerHTML = 'Clear all completed';
liClear.appendChild(pClear);
todoUl.appendChild(liClear);