const CheckerMap = () => {
  let table = document.createElement("table");
  table.className += " main";

  for (let i = 0; i < 8; i++) {
    let row = table.insertRow(0); // создание строки
    for (let j = 0; j < 8; j++) {
      let cell = row.insertCell(0); // создание клетки

      if (((i == 2 || i == 0) && j % 2 == 1) || (i == 1 && j % 2 == 0)) {
        let CheckerWhite = document.createElement("div");
        CheckerWhite.className = " checker " + "white";
        cell.appendChild(CheckerWhite);
      }
      if (((i == 5 || i == 7) && j % 2 == 0) || (i == 6 && j % 2 == 1)) {
        let CheckerBlack = document.createElement("div");
        CheckerBlack.className = " checker " + "black";
        cell.appendChild(CheckerBlack);
      }
    }
  }

  document.body.appendChild(table);
};

window.addEventListener("load", CheckerMap);
