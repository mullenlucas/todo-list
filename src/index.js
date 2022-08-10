import _ from 'lodash';
import './style.css';

// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   return element;
// }

// document.body.appendChild(component());

const tasks = [
  {
    description: "Complete a daily challenge",
    completed: true,
    index: 1,
  },
  {
    description: "Update and polish projects",
    completed: false,
    index: 2,
  },
  {
    description: "Respond e-mails",
    completed: true,
    index: 3,
  },
]

const todoSec = document.querySelector('todo-sec')
const todoUlDesc = document.getElementById('todo-ul-desc')
const todoUlBool = document.getElementById('todo-ul-bool')
let descHtml= ""
let t = ""

tasks.map((task) => {
  

  task.completed ? t="Done" : t="Pending"
  let liB = document.createElement('li')
  let x = document.createElement("INPUT")
  x.setAttribute("type", "checkbox")
  liB.appendChild(x)
  todoUlBool.appendChild(liB)
  descHtml += `
  <li>
  ${task.description}
  </li>
  `

}
)
todoUlDesc.innerHTML = descHtml