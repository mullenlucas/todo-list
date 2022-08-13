const editHtml = (idnum, tC) => {
  const remop = document.getElementById(`p${idnum}`);
  const opTask = remop.innerHTML;
  const iconId = document.getElementById(`${idnum}`);

  remop?.remove();

  const textEditField = document.createElement('input');
  textEditField.setAttribute('type', 'text');
  textEditField.setAttribute('class', 'editing-task');
  textEditField.value = opTask;
  const liNew = document.getElementById(`id${idnum}`);

  liNew.insertBefore(textEditField, iconId);
  textEditField.focus();

  textEditField.addEventListener('change', () => {
    const newDesc = document.createElement('p');
    newDesc.setAttribute('id', `p${idnum}`);
    newDesc.innerHTML = textEditField.value;
    textEditField.remove();
    liNew.insertBefore(newDesc, iconId);

    tC.changeDesc(idnum, newDesc.innerHTML);
    localStorage.setItem('todoItems', JSON.stringify(tC.allTasks));
  });
};

export default editHtml;