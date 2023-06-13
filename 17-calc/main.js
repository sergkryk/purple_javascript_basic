const operations = {
  add(a, b) {
    return a + b;
  },
  substract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

function calc(cb, a, b) {
  return cb(a, b);
}

const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");

const buttons = document.querySelector(".calc_buttons");

buttons.addEventListener("click", (evt) => {
  if (evt.target.nodeName === "BUTTON") {
    const op = evt.target.getAttribute("data-calc");
    const num1 = input1.value;
    const num2 = input2.value;
    if (!num1 || !num2) {
      return;
    }
    if (isNaN(num1) || isNaN(num2)) {
      return;
    }
    const calculations = calc(operations[op], Number(num1), Number(num2));
    const result = document.querySelector(".calc_result");
    result.textContent = `Итого: ${calculations}`;
    input1.value = "";
    input2.value = "";
  }
});
