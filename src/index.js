import './style.css';
import Tasks from './modules/Tasks.js';
import addHtml from './modules/AddHtml.js';
import remoHtml from './modules/RemoHtml.js';
import editHtml from './modules/EditHtml.js';
import chkUpd from './modules/checksUpdate.js';
import completedFunc from './modules/completedTasks.js';

// Initiate Tasks class
const tasksCl = new Tasks();

const todoUl = document.getElementById('todo-ul');

let currentIndex = 0;
let numt = 0;

const liClear = document.createElement('li');
liClear.setAttribute('id', 'clearList');
const pClear = document.createElement('p');
pClear.innerHTML = 'Clear all completed';
liClear.appendChild(pClear);
todoUl.appendChild(liClear);
const clearTodo = document.getElementById('clearList');

const addTask = document.getElementById('add-task');
const addIcon = document.getElementById('add-icon');
let taskMenuIcon = document.querySelectorAll('.menu-display');
const menuExp = document.getElementById('menu-task');
const editTask = document.getElementById('edit-task');
const removeTask = document.getElementById('remove-task');
let inChk = document.querySelectorAll('.checkbox-item');

// Initiate web
// Load elements
if (localStorage.length !== 0) {
  const storedVals = JSON.parse(localStorage.todoItems);

  storedVals.forEach((sV) => {
    todoUl.insertBefore(addHtml(sV.desc, sV.index - 1,
      sV.desc, sV.bval, sV.index, tasksCl), clearTodo);
  });
  currentIndex = tasksCl.allTasks.length;

  taskMenuIcon = document.querySelectorAll('.menu-display');

  taskMenuIcon.forEach((a) => {
    a.addEventListener('click', (c) => {
      menuExp.style.display = 'flex';
      const x = c.clientX;
      const y = c.clientY;

      menuExp.style.top = `${y}px`;
      menuExp.style.left = `${x}px`;
      numt = c.target.id;
    });
  });

  inChk = document.querySelectorAll('.checkbox-item');
  chkUpd(inChk, tasksCl.allTasks);
}

addIcon.addEventListener('click', () => {
  if (addTask.value !== '') {
    todoUl.insertBefore(addHtml(
      addTask.value, currentIndex,
      addTask.value, false, currentIndex, tasksCl,
    ), clearTodo);

    currentIndex += 1;
    localStorage.setItem('todoItems', JSON.stringify(tasksCl.allTasks));
    addTask.value = '';

    taskMenuIcon = document.querySelectorAll('.menu-display');
    taskMenuIcon.forEach((a) => {
      a.addEventListener('click', (c) => {
        menuExp.style.display = 'flex';
        const x = c.clientX;
        const y = c.clientY;

        menuExp.style.top = `${y}px`;
        menuExp.style.left = `${x}px`;
        numt = c.target.id;
      });
    });
    inChk = document.querySelectorAll('.checkbox-item');
    chkUpd(inChk, tasksCl.allTasks);
  }
});

removeTask.addEventListener('click', () => {
  remoHtml(numt, tasksCl);

  currentIndex -= 1;
  localStorage.setItem('todoItems', JSON.stringify(tasksCl.allTasks));
  menuExp.style.display = 'none';
});

editTask.addEventListener('click', () => {
  editHtml(numt, tasksCl);

  menuExp.style.display = 'none';
});

clearTodo.addEventListener('click', () => {
  completedFunc(tasksCl);

  localStorage.setItem('todoItems', JSON.stringify(tasksCl.allTasks));
});