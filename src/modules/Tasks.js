import Task from './eachTask.js';

// Class that contains collection of tasks
class Tasks {
  constructor() {
    this.tasks = [];
  }

  // create a new task and save it in the collection using the Task class declared above
  newTask(desc, bval, index) {
    const t = new Task(desc, bval, index);
    this.tasks.push(t);
    return t;
  }

  get allTasks() {
    return this.tasks;
  }
}

export default Tasks;