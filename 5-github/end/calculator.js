//hold numbers in memory
let runningTotal = 0;

//print the initial value which is zero
let buffer = "0"

//hold previous operator
let previousOperator;

const screen = document.querySelector('.screen');

//function for the click of buttons

function buttonClick(value) {
if (isNaN(value) === 'number')
{handleSymbol(value);}
else{
handleNumber(value);
}
}

//function to hadle symbols
function handleSymbol(symbol){}

//function to handle numbers concatenate as string 
function handleNumber(numberString){
    if (buffer === '0'){
        buffer = numberString;
    } else{
        buffer = buffer + numberString;
    }
}
//this function get to called once the page is loaded
function init (){
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })
}

init();


