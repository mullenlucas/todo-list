const completedFunc = (tC) => {
  const completedTasks = tC.allTasks.filter((tsk) => tsk.bval);
  completedTasks.forEach((chk) => {
    const itemsToRemo = document.getElementById(`id${chk.index}`);
    itemsToRemo.remove();
  });
  tC.removeCompleted(completedTasks);
  tC.changeIndex();
};

export default completedFunc;