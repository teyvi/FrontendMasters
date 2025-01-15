//hold numbers in memory
let runningTotal = 0;

//print the initial value which is zero
let buffer = "0";

//hold previous operator
let previousOperator;

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
 
    switch (value){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
        case '&plus':
        case '&minus':
        case '&times':
        case '&divide':
            handleMath(symbol);
            break;
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
