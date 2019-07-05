const DataBoolean = {
  result_checkingTheNumber: false,
  result_checkAction: false
};
const nubr_1 = prompt(
  "введите первое число(число должно быть действительным R)"
);
const action = prompt(
  "Введите желаемый знак: (+) прибавить, (-) отнять, (/) делить, (*) умножить"
);
const nubr_2 = prompt(
  "введите второе число(число должно быть действительным R)"
);

const checkingTheNumber = (nubr_1, nubr_2, DataBoolean) => {
  const bool = {
    check_1: false,
    check_2: false
  };
  if (nubr_1 > 0 || nubr_1 === 0 || nubr_1 < 0) {
    bool.check_1 = true;
  }
  if (nubr_2 > 0 || nubr_2 === 0 || nubr_2 < 0) {
    bool.check_2 = true;
  }
  if (bool.check_1 == false || bool.check_2 == false) {
    return alert("где-то... было введено не число!");
  }
  return (DataBoolean.result_checkingTheNumber = true);
};

const checkAction = (action, DataBoolean) => {
  let check = false;
  if (action === "+" || action === "-" || action === "/" || action === "*") {
    check = true;
  }
  if (check == false) {
    return alert("Введен не корректный знак!");
  }
  return (DataBoolean.result_checkAction = true);
};

const calculatorOperation = (nubr_1, nubr_2, action, DataBoolean) => {
  if (
    DataBoolean.result_checkAction == true &&
    DataBoolean.result_checkingTheNumber == true
  ) {
    switch (action) {
      case "+":
        return alert("Результат сложения = " + (+nubr_1 + +nubr_2));
      case "-":
        return alert("Результат вычитания = " + (nubr_1 - nubr_2));
      case "/":
        return alert("Результат деления = " + nubr_1 / nubr_2);
      case "*":
        return alert("Результат умножения = " + nubr_1 * nubr_2);

      default:
        return;
    }
  }
  return;
};

checkingTheNumber(nubr_1, nubr_2, DataBoolean);
checkAction(action, DataBoolean);
calculatorOperation(nubr_1, nubr_2, action, DataBoolean);
