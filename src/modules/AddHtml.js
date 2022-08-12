const addHtml = (newD, currI, d, b, ix, tC) => {
  tC.newTask(newD, b, currI + 1);

  const liB = document.createElement('li');
  liB.setAttribute('id', `id${ix}`);
  const x = document.createElement('INPUT');
  x.setAttribute('type', 'checkbox');
  liB.appendChild(x);
  const p = document.createElement('p');
  p.setAttribute('id', `p${ix}`);
  p.setAttribute('class', 'p-task');
  p.innerHTML = d;
  liB.appendChild(p);

  const i = document.createElement('i');
  i.setAttribute('class', 'menu-display fa-solid fa-ellipsis-vertical');
  i.setAttribute('id', `${ix}`);
  liB.appendChild(i);

  return liB;
};

export default addHtml;
