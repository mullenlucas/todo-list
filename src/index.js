import './style.css';
import Tasks from './modules/Tasks.js';
import addHtml from './modules/AddHtml.js';
import remoHtml from './modules/RemoHtml.js';
import editHtml from './modules/EditHtml.js';
// import chkUpd from './modules/checksUpdate.js';
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

const toggleMenu = (c) => {
  menuExp.style.display = 'flex';
  const x = c.clientX;
  const y = c.clientY;

  menuExp.style.top = `${y}px`;
  menuExp.style.left = `${x}px`;
  numt = c.target.id;
};

const chkUpd = (evi) => {
  const matchId = evi.target.id.match(/(\d+)/);
  tasksCl.allTasks[matchId[0] - 1].bval = !tasksCl.allTasks[matchId[0] - 1].bval;

  localStorage.setItem('todoItems', JSON.stringify(tasksCl.allTasks));
};

// Initiate web
// Load elements
window.onload = () => {
  if (localStorage.length !== 0) {
    const storedVals = JSON.parse(localStorage.todoItems);

    storedVals.forEach((sV) => {
      todoUl.insertBefore(addHtml(sV.desc, sV.index,
        sV.desc, sV.bval, sV.index, tasksCl), clearTodo);
    });
    currentIndex = tasksCl.allTasks.length;

    taskMenuIcon = document.querySelectorAll('.menu-display');
    taskMenuIcon.forEach((a) => {
      a.addEventListener('click', toggleMenu);
    });

    inChk = document.querySelectorAll('.checkbox-item');
    inChk.forEach((chk) => {
      chk.addEventListener('change', chkUpd);
    });
  }
};

addIcon.addEventListener('click', () => {
  if (addTask.value !== '') {
    taskMenuIcon.forEach((a) => {
      a.removeEventListener('click', toggleMenu);
    });
    inChk.forEach((chk) => {
      chk.removeEventListener('change', chkUpd);
    });
    currentIndex = tasksCl.allTasks.length;

    todoUl.insertBefore(addHtml(
      addTask.value, currentIndex,
      addTask.value, false, currentIndex + 1, tasksCl,
    ), clearTodo);

    localStorage.setItem('todoItems', JSON.stringify(tasksCl.allTasks));
    currentIndex = tasksCl.allTasks.length;
    addTask.value = '';

    taskMenuIcon = document.querySelectorAll('.menu-display');
    taskMenuIcon.forEach((a) => {
      a.addEventListener('click', toggleMenu);
    });

    inChk = document.querySelectorAll('.checkbox-item');
    inChk.forEach((chk) => {
      chk.addEventListener('change', chkUpd);
    });

    localStorage.setItem('todoItems', JSON.stringify(tasksCl.allTasks));
  }
});

removeTask.addEventListener('click', () => {
  remoHtml(numt, tasksCl);
  currentIndex = tasksCl.allTasks.length;

  const liMain = document.querySelectorAll('.todo-item');
  liMain.forEach((dj, inv) => {
    dj.id = `id${inv + 1}`;
  });

  const leftLi = document.querySelectorAll('.left-li');
  leftLi.forEach((dj, inv) => {
    dj.id = `ld${inv + 1}`;
  });

  const chkbxItem = document.querySelectorAll('.checkbox-item');
  chkbxItem.forEach((dj, inv) => {
    dj.id = `chid${inv + 1}`;
  });

  const pClass = document.querySelectorAll('.p-task');
  pClass.forEach((dj, inv) => {
    dj.id = `p${inv + 1}`;
  });

  const menuDispy = document.querySelectorAll('.menu-display');
  menuDispy.forEach((dj, inv) => {
    dj.id = `${inv + 1}`;
  });

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