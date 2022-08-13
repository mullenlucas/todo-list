const editHtml = (idnum, tC) => {
  const remop = document.getElementById(`p${idnum}`);
  const opTask = remop.innerHTML;

  remop?.remove();

  const textEditField = document.createElement('input');
  textEditField.setAttribute('type', 'text');
  textEditField.setAttribute('class', 'editing-task');
  textEditField.value = opTask;
  const leftNew = document.getElementById(`ld${idnum}`);

  leftNew.appendChild(textEditField);
  textEditField.focus();

  textEditField.addEventListener('change', () => {
    const newDesc = document.createElement('p');
    newDesc.setAttribute('id', `p${idnum}`);
    newDesc.innerHTML = textEditField.value;

    textEditField.remove();
    leftNew.appendChild(newDesc);

    tC.changeDesc(idnum, newDesc.innerHTML);
    localStorage.setItem('todoItems', JSON.stringify(tC.allTasks));
  });
};

export default editHtml;