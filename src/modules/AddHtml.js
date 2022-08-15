const addHtml = (newD, currI, d, b, ix, tC) => {
  tC.newTask(newD, b, currI);

  const liB = document.createElement('li');
  liB.setAttribute('id', `id${ix}`);
  liB.setAttribute('class', 'todo-item');
  const leftDiv = document.createElement('div');
  leftDiv.setAttribute('class', 'left-li');
  leftDiv.setAttribute('id', `ld${ix}`);
  const x = document.createElement('INPUT');
  x.setAttribute('type', 'checkbox');
  x.setAttribute('id', `chid${ix}`);
  x.setAttribute('class', 'checkbox-item');
  if (b) { x.checked = true; }
  leftDiv.appendChild(x);
  const p = document.createElement('p');
  p.setAttribute('id', `p${ix}`);
  p.setAttribute('class', 'p-task');
  p.innerHTML = d;
  leftDiv.appendChild(p);
  liB.appendChild(leftDiv);

  const i = document.createElement('i');
  i.setAttribute('class', 'menu-display fa-solid fa-ellipsis-vertical');
  i.setAttribute('id', `${ix}`);
  liB.appendChild(i);

  tC.changeIndex();
  return liB;
};

export default addHtml;
