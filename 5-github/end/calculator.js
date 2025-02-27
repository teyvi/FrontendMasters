//hold numbers in memory
let runningTotal = 0;

//print the initial value which is zero
let buffer = "0";

//hold previous operator
let previousOperator = null;

const screen = document.querySelector(".screen");

//function for the click of buttons

function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}

//function to hadle symbols using switch instead of if statement for each symbol
function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      break;
    case "=":
      if (previousOperator === null) {
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;

    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}
//function to bookkeep the math operation
function handleMath(symbol) {
  if (buffer === "0") {
    return;
  }
  const intBuffer = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = "0";
}

//function to flush the operation
function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "÷") {
    runningTotal /= intBuffer;
  } else {
    runningTotal *= intBuffer;
  }
}

//function to handle numbers concatenate as string
function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}
//this function get to called once the page is loaded
function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText);
    });
}

init();
