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

  get allIndexes() {
    return this.tasks.index;
  }

  removeTask(ind) {
    this.tasks.splice(ind - 1, 1);
  }

  changeIndex() {
    this.allTasks.forEach((task, i) => {
      task.index = i + 1;
    });
  }

  changeDesc(ind, desq) {
    this.allTasks[ind - 1].desc = desq;
  }

  changeBool(i, b) {
    this.allTasks[i].bval = b;
  }

  removeCompleted(completed) {
    this.tasks = this.tasks.filter((element) => !completed.includes(element));
  }
}

export default Tasks;