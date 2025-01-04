const person1 = {
  name: "Brian",
  ageRange: "25-35",
};

const person2 = {
  name: "Jack",
  ageRange: "65-75",
};

function suggestMusic(person) {
  if ((person.ageRange === "25-35")) {
    console.log("We think you like Daft Punk you crazy millenial");
  } else if ((person.ageRange === "65-75")) {
    console.log("You are obviously going to like Johnny Cash. ");
  }
  else {
    console.log("David Bowie maybe?")
  }
}

suggestMusic(person1);
suggestMusic(person2);


//adding functions to objects
const dog = {
    name: 'doggie',
    speak (){
        console.log('woof woof')
    }
}

dog.speak();


//adding a parameter
const dogo = {
    name: 'doggie',
    speak (somethingHere){
        console.log('woof woof', somethingHere)
    }
}
dogo.speak('lol');

//objects with objects no limit to nesting objects
const userLocation ={
    city:'accra',
    location :{
        country: "ghana",
        region:"Greater Accra",
        apartment:{
            roomNumber:"23",
            level:"2"
        }
        
    }
}
console.log("user info",userLocation.location.apartment.roomNumber)


//arrays and some array methods
const courses = [
    {teacher:'Kyle Simpson', course:"JS function lite"},
    {teacher:'Zione Sion', course:"SQL LITE"},
    {teacher:'Jean Simps', course:"HTML and CSS"}, 
]

//push array method
courses.push({teacher:'Judge Meadows', course:"The Pact for Dummies"})
console.log(courses)


const noJean = courses.pop()
console.log('no jean',noJean)


const subArray = courses.splice(1,1);
const courseInsert = courses.splice(1,1, {course:"intro to silo season 1"});

console.log('subarrays',subArray)
console.log('coursesInsert',courseInsert)
console.log(courses)
