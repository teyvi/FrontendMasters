//hold numbers in memory
let runningTotal = 0;

//print the initial value which is zero
let buffet = "0"

//hold previous operator
let previousOperator;

const screen = document.querySelector('.screen');

//function for the click of buttons

function buttonClick(value) {}

//this function get to called once the page is loaded
function init (){
    document.querySelector('.calc-buttons')
    .addEventListerner('click', function(event){
        buttonClick(event.target.innerText);
    })
}




