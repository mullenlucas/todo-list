/** * @jest-environment jsdom */

import addHtml from './AddHtml.js'
import Tasks from './Tasks.js';

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
})