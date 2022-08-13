const remoHtml = (idnum, tC) => {
  const remothis = document.getElementById(`id${idnum}`);

  tC.removeTask(idnum);

  remothis?.remove();

  tC.changeIndex();
};

export default remoHtml;