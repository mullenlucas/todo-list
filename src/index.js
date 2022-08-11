import _ from 'lodash';
import './style.css';

// Individual Task class, regarding properties and methods for one task
class Task {
  constructor(desc,bval,index){
    this.desc = desc,
    this.bval = bval,
    this.index = index
  }

  get taskDesc() {
    return this.desc
  }

  get taskBval() {
    return this.bval
  }

  get taskIndex() {
    return this.index
  }
}

// Class that contains collection of tasks
class Tasks {
  constructor(){
    this.tasks = []
  }

  // create a new task and save it in the collection using the Task class declared above
  newTask(desc, bval, index){
    let t = new Task(desc, bval,index)
    this.tasks.push(t)
    return t
  }

  get allTasks(){
    return this.tasks
  }
}

// Initiate Tasks class
const tasksCl = new Tasks()

// Load example tasks to the class
const exampleTasks = [
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

exampleTasks.forEach((t) => {
  tasksCl.newTask(t.description, t.completed, t.index)
})

const todoSec = document.querySelector('todo-sec')
const todoUl = document.getElementById('todo-ul')

let t = ""

tasksCl.allTasks.forEach((task) => {
  
  task.taskBval ? t="Done" : t="Pending"
  let liB = document.createElement('li')
  liB.setAttribute('id', `id${task.taskIndex}`)
  let x = document.createElement("INPUT")
  x.setAttribute("type", "checkbox")
  liB.appendChild(x)
  let p = document.createElement('p')
  p.setAttribute('id', `p${task.taskIndex}`)
  p.innerHTML = task.taskDesc
  liB.appendChild(p)

  let i = document.createElement('i')
  i.setAttribute('class', 'fa-solid fa-ellipsis-vertical')
  liB.appendChild(i)

  todoUl.appendChild(liB)

}
)

let liClear = document.createElement('li')
liClear.setAttribute('id', 'clearList')
let pClear = document.createElement('p')
pClear.innerHTML = "Clear all completed"
liClear.appendChild(pClear)
todoUl.appendChild(liClear)