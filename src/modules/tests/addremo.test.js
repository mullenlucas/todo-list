/** * @jest-environment jsdom */

import addHtml from '../AddHtml.js';
import Tasks from '../Tasks.js';
import remoHtml from '../RemoHtml.js';

describe('Add and Remove Task', () => {
  test('Add a new task', () => {
    document.body.innerHTML = "<ul id='todo-ul'></ul>";
    const todoUl = document.getElementById('todo-ul');
    const clearTodo = document.getElementById('clearList');
    const tasksCl = new Tasks();

    todoUl.insertBefore(addHtml('holis', 1, 'hola', false, 1, tasksCl), clearTodo);

    const list = document.querySelectorAll('.todo-item');
    expect(list).toHaveLength(1);
  });

  test('Remove a task', () => {
    document.body.innerHTML = "<li id='id1' class='todo-item'><div class='left-li' id='ld1'><input type='checkbox' id='chid1' class='checkbox-item'><p id='p1' class='p-task'>New item</p></div><i class='menu-display fa-solid fa-ellipsis-vertical' id='1'></i></li>";
    const tasksCl = new Tasks();
    remoHtml('1', tasksCl);

    const list = document.querySelectorAll('.todo-item');
    expect(list).toHaveLength(0);
  });
});