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


//using sort Method but added another function because sorting works on strings 
const primeNumbers= [10, 1, 2, 3, 5, 7, 11, 13,17];
console.log(primeNumbers.sort(function (num1, num2) {
    if (num1 > num2){
        return 1;
    }
    else if(num2 > num1 ){
        return -1;
    }
    return 0;
}))

//reverse sorting

console.log(primeNumbers.sort(function (num1, num2) {
    if (num1 > num2){
        return -1;
    }
    else if(num2 > num1 ){
        return 1;
    }
    return 0;
}))

//using the sort function on strings
console.log(cities.sort())