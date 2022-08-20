/** * @jest-environment jsdom */

import addHtml from '../AddHtml.js';
import Tasks from '../Tasks.js';
import completedFunc from '../completedTasks.js';

describe('Edit, remove and clear-all Task operations', () => {
  test('Editing a task', () => {
    document.body.innerHTML = "<ul id='todo-ul'><li id='id1' class='todo-item'><div class='left-li' id='ld1'><input type='checkbox' id='chid1' class='checkbox-item'><input type='text' class='editing-task'></div><i class='menu-display fa-solid fa-ellipsis-vertical' id='1'></i></li></ul>";
    const todoUl = document.getElementById('todo-ul');
    const clearTodo = document.getElementById('clearList');
    const tasksCl = new Tasks();
    const tasks = [
      {
        desc: 'Clear-space',
        bval: false,
        index: 1,
      },
      {
        desc: 'Test-task',
        bval: true,
        index: 2,
      },
      {
        desc: 'Editable-task',
        bval: false,
        index: 3,
      },
    ];

    tasks.forEach((sV) => {
      todoUl.insertBefore(addHtml(sV.desc, sV.index,
        sV.desc, sV.bval, sV.index, tasksCl), clearTodo);
    });

    const changeDesc = (input) => {
      input.value = 'Clear-time';
      tasks[0].description = input.value;
    };

    const ediTask = document.querySelectorAll('.editing-task');
    changeDesc(ediTask, tasks);
    expect(ediTask.value).toBe('Clear-time');
  });

  test('Update a completion value', () => {
    const tasks = [
      {
        desc: 'Clear-space',
        bval: false,
        index: 1,
      },
      {
        desc: 'Test-task',
        bval: true,
        index: 2,
      },
      {
        desc: 'Editable-task',
        bval: false,
        index: 3,
      },
    ];

    const changeCompletion = (ev) => {
      ev.bval = !ev.bval;
    };

    tasks.forEach((t) => {
      changeCompletion(t);
    });

    expect(tasks[0].bval).toBe(true);
    expect(tasks[1].bval).toBe(false);
    expect(tasks[2].bval).toBe(true);
  });

  test('Clear all completed values', () => {
    document.body.innerHTML = "<ul id='todo-ul'></i></li><li id='clearList'><p>Clear all completed</p></li></ul>";
    const todoUl = document.getElementById('todo-ul');
    const clearTodo = document.getElementById('clearList');
    const tasksCl = new Tasks();

    const tasks = [
      {
        desc: 'Clear-space',
        bval: false,
        index: 1,
      },
      {
        desc: 'Test-task',
        bval: true,
        index: 2,
      },
      {
        desc: 'Editable-task',
        bval: false,
        index: 3,
      },
    ];

    tasks.forEach((sV) => {
      todoUl.insertBefore(
        addHtml(sV.desc, sV.index, sV.desc, sV.bval, sV.index, tasksCl),
        clearTodo,
      );
    });

    completedFunc(tasksCl);

    const list = document.querySelectorAll('.todo-item');
    expect(list).toHaveLength(2);
  });
});