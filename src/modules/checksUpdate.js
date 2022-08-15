const chkUpd = (chkClass, tC) => {
  chkClass.forEach((ch) => {
    ch.addEventListener('change', (evi) => {
      const matchId = evi.target.id.match(/(\d+)/);
      tC[matchId[0] - 1].bval = !tC[matchId[0] - 1].bval;

      localStorage.setItem('todoItems', JSON.stringify(tC));
    });
  });
};

export default chkUpd;