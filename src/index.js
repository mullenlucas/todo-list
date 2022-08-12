/* eslint-disable */
import './style.css';
import Tasks from './modules/Tasks.js';

// Initiate Tasks class
const tasksCl = new Tasks();

const todoUl = document.getElementById('todo-ul');


// tasksCl.allTasks.forEach((task) => {
//   const liB = document.createElement('li');
//   liB.setAttribute('id', `id${task.taskIndex}`);

const liClear = document.createElement('li');
liClear.setAttribute('id', 'clearList');
const pClear = document.createElement('p');
pClear.innerHTML = 'Clear all completed';
liClear.appendChild(pClear);
todoUl.appendChild(liClear);
const clearTodo = document.getElementById('clearList');


const addTask = document.getElementById('add-task');
const addIcon = document.getElementById('add-icon');
let taskMenuIcon = document.querySelectorAll('.menu-display')

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
  i.setAttribute('class', 'menu-display fa-solid fa-ellipsis-vertical');
  i.setAttribute('id', `${tasksCl.allTasks[currentIndex].index}`)
  liB.appendChild(i);

  todoUl.insertBefore(liB, clearTodo);

  currentIndex++;
  taskMenuIcon = document.querySelectorAll('.menu-display')
  console.log(tasksCl);

  taskMenuIcon.forEach((a) => {
    a.addEventListener('click', (c) => {
      console.log('holiswe');
      menuExp.style.display = 'flex'
      let x = c.clientX
      let y = c.clientY
      
      menuExp.style.top = `${y}px`;
      menuExp.style.left = `${x}px`;
      globalThis.numt = c.target.id
    })
  })

})

const menuExp = document.getElementById('menu-task')
const editTask = document.getElementById('edit-task')
const removeTask = document.getElementById('remove-task')

removeTask.addEventListener('click', (rT) => {
  const remothis = document.getElementById(`id${numt}`)
  
  tasksCl.removeTask(numt)
  
  remothis?.remove()

  tasksCl.changeIndex()
  console.log(tasksCl);
  currentIndex--
  menuExp.style.display = 'none'
})

editTask.addEventListener('click', (eT) => {
  const remop = document.getElementById(`p${numt}`)
  const opTask = remop.innerHTML
  const iconId = document.getElementById(`${numt}`)

  remop?.remove()

  const textEditField = document.createElement('input')
  textEditField.setAttribute('type', 'text')
  textEditField.setAttribute('class', 'editing-task')
  textEditField.placeholder = opTask
  const liNew = document.getElementById(`id${numt}`)

  liNew.insertBefore(textEditField, iconId)
  textEditField.focus()

  textEditField.addEventListener('change', () => {
    const newDesc = document.createElement('p')
    newDesc.setAttribute('id', `p${numt}`);
    newDesc.innerHTML = textEditField.value;
    textEditField.remove()
    liNew.insertBefore(newDesc, iconId)

    tasksCl.changeDesc(numt, newDesc.innerHTML)
    console.log(tasksCl)
  });
  menuExp.style.display = 'none';
})