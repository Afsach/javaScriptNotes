// map is a array method
// it wiil take every element and index of array and return new array 
// for our convenience since map method is returning new array we should write return in input parameter function instead of console.log()
// if we write console.log() instead of return it return undefined for every element and store it in an new array
let number = [4,5,9,6,7,3,8];

//Function expression
// call back function

const Square = function(number){
    return number * number;
}  
const squareNum = number.map(Square);
console.log(squareNum);


// first way 
// const  squareNumber = number.map(function(number){
//     return number * number;
// });

// using arrow function
//     const  squareNumber = number.map((number)=>{
//     return number * number;
// });

// sending second parameter as index of array 
const  squareNumber = number.map((number, index)=>{
    return `At index : ${index}, square of number is: ${number * number}`;
});
console.log(squareNumber);

const user = [
    { "first Name" : "Nagam", "Age" : 19 },
    { "first Name" : "vedika", "Age" : 19 },
    { "first Name" : "Sonali", "Age" : 19 },
    { "first Name" : "Ashwini", "Age" : 19 }
];
const customer = user.map((users, index)=>{
    return users["first name"];
});
console.log(customer);

