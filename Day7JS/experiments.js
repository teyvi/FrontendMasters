const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const myName ="Angela";
console.log(myName);

const firstName = "Angela";
const lastName = "Teyvi";
const sentence = "Hello " + firstName  + " " + lastName + "! How are you"
console.log(sentence);

//better way to concatenate
const sentences = `Hello ${ firstName} ${lastName} ! How are you`
console.log(sentences);

//using boolean and control flow
const isTheSkyBlue = false;
console.log(isTheSkyBlue);

const isSkyBlue = false;

if (isSkyBlue) {
    console.log("The sky is definitely blue ")
}
else {
    console.log("No blue in here")
}

const weatherPrediction = false
let greeting;

if (weatherPrediction) {
    greeting = 'It must be a bad weather';
}
else{
    greeting = "You better stay in";
}
console.log(greeting)


//else if statement
const numberOfPeople = 3000;
let action;

if (numberOfPeople === 0)
{
    action = "alone again!?"
}
else if (numberOfPeople <= 6 )
{
    action ="some card games for sure"
}
else {
    action ="get ready to rumbo!"
}

console.log(action)


//using numbers
const num = 5
console.log(num)


//loops
// let friendsAtParty = 0;

// friendsAtParty = friendsAtParty + 1;
// console.log(friendsAtParty)


//while loop
let friendsAtParty = 0;
while (friendsAtParty < 10)
{   
    friendsAtParty = friendsAtParty + 1;
    console.log(friendsAtParty);
}
// console.log(friendsAtParty);

//for loop
let friendsAtNewParty = 0;
for (let i = 0; i <= 10; i++){
    friendsAtNewParty++;

}
console.log("new", friendsAtNewParty);


const character = "d";
const timesToRepeat = 4;
let myString = ""

for (let i = 0; i < timesToRepeat; i++)
{
    myString = myString +  character;
}
console.log("times to repeat", myString)

let total = 0;
for (let i = 0; i <= 200; i++)
{
    total ++
}
console.log('total', total)

function countNumbers (start, end){
const count = start + end;
const middle = end/2;
total = count * middle;
return total;
}
console.log(countNumbers(4,330));

//correct way of calculating this
function sumNumbers(start, end) {
    const count = (end - start) + 1;  // Number of terms
    const total = (count / 2) * (start + end);  // Sum formula
    return total;
}
console.log(sumNumbers(4, 330));  // Outputs 80499

//check if number is positive or negative
function checkPositiveNegative(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        return 'invalid'
    }

if (number < 0 ){
    return 'its negative'
}
else if (number > 0){
    console.log('its positive')
}
else {
    console.log('that is zero')
}}
checkPositiveNegative(0)