// Individual Task class, regarding properties and methods for one task
class Task {
  constructor(desc, bval, index) {
    this.desc = desc;
    this.bval = bval;
    this.index = index;
  }

  get taskDesc() {
    return this.desc;
  }

  get taskBval() {
    return this.bval;
  }

  get taskIndex() {
    return this.index;
  }
}

export default Task;