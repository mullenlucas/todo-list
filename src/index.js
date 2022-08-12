import './style.css';
import Tasks from './modules/Tasks.js';

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
// Initiate web

// Load elements
if (localStorage.length !== 0) {
  const storedVals = JSON.parse(localStorage.todoItems);

  storedVals.forEach((sV) => {
    tasksCl.newTask(sV.desc, sV.bval, sV.index);

    const liB = document.createElement('li');
    liB.setAttribute('id', `id${sV.index}`);
    const x = document.createElement('INPUT');
    x.setAttribute('type', 'checkbox');
    liB.appendChild(x);
    const p = document.createElement('p');
    p.setAttribute('id', `p${sV.index}`);
    p.innerHTML = sV.desc;
    liB.appendChild(p);

    const i = document.createElement('i');
    i.setAttribute('class', 'menu-display fa-solid fa-ellipsis-vertical');
    i.setAttribute('id', `${sV.index}`);
    liB.appendChild(i);

    todoUl.insertBefore(liB, clearTodo);
  });
  currentIndex = tasksCl.allTasks.length;
}

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
  i.setAttribute('class', 'menu-display fa-solid fa-ellipsis-vertical');
  i.setAttribute('id', `${tasksCl.allTasks[currentIndex].index}`);
  liB.appendChild(i);

  todoUl.insertBefore(liB, clearTodo);

  currentIndex += 1;
  taskMenuIcon = document.querySelectorAll('.menu-display');

  localStorage.setItem('todoItems', JSON.stringify(tasksCl.allTasks));

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
});

removeTask.addEventListener('click', () => {
  const remothis = document.getElementById(`id${numt}`);

  tasksCl.removeTask(numt);

  remothis?.remove();

  tasksCl.changeIndex();
  currentIndex -= 1;
  localStorage.setItem('todoItems', JSON.stringify(tasksCl.allTasks));
  menuExp.style.display = 'none';
});

editTask.addEventListener('click', () => {
  const remop = document.getElementById(`p${numt}`);
  const opTask = remop.innerHTML;
  const iconId = document.getElementById(`${numt}`);

  remop?.remove();

  const textEditField = document.createElement('input');
  textEditField.setAttribute('type', 'text');
  textEditField.setAttribute('class', 'editing-task');
  textEditField.placeholder = opTask;
  const liNew = document.getElementById(`id${numt}`);

  liNew.insertBefore(textEditField, iconId);
  textEditField.focus();

  textEditField.addEventListener('change', () => {
    const newDesc = document.createElement('p');
    newDesc.setAttribute('id', `p${numt}`);
    newDesc.innerHTML = textEditField.value;
    textEditField.remove();
    liNew.insertBefore(newDesc, iconId);

    tasksCl.changeDesc(numt, newDesc.innerHTML);
    localStorage.setItem('todoItems', JSON.stringify(tasksCl.allTasks));
  });
  menuExp.style.display = 'none';
});
