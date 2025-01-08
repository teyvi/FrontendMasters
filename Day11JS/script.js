//for each is a function that accepts functions
const cities = [
    'Seattle', 'San Francisico','Salt lake City', 'Amsterdam','Honkong'
];

//it takes each item in the array and iterate based on the function to be executed

//a function that logs each city and index
cities.forEach(function(city,index)
{
    console.log(city, index)
})


//using map on an array
const newCities = cities.map(function (city){
return city.toLocaleUpperCase()
})
console.log(newCities)

