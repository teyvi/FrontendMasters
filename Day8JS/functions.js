//A function is a bit of reusable code eg
function addTwo(number) {
    return number + 2;
}
const finalAnswer = addTwo(5);
console.log(finalAnswer);

//add two numbers
function add (num1, num2) {
    return num1 + num2
}
console.log (add(5,10))


//complicated function

function greet (firstName, lastName, honorific, greeting)
{
    return `${greeting} ${honorific}  ${lastName}! Im extremely happy you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}  `
}

console.log (greet("Angela", "Teyvi", "Miss", "Hello"))

//builtin functions 
const sentence = "ThiS SomE WeirD TexT"
console.log(sentence.toLocaleLowerCase())

console.log (Math.min(5.1, 1, 100,0.5));
console.log (Math.max(5.1, 1, 100,0.5));

