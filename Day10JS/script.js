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