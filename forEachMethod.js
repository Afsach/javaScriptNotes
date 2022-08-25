// forEach pass the each index and element of array 
// It is are wish that we want to print it or not 
// for each does not give new array in return
const numbers = [4, 6, 3, 60];

function multiplyByTwo(number, index){
    console.log("Index is", index + " number is", number);
    console.log(`${number}*2 = ${number*2}`);
}

// multiplyByTwo(numbers[0], 0);

// for(let i=0; i<numbers.length; i++){
//     multiplyByTwo(numbers[i], i);
// }

// first method
numbers.forEach(multiplyByTwo);

// second method
numbers.forEach(function(number){
    console.log(number*2);
});

// numbers.forEach(function(number, index){
//     console.log(number*2);
// })

const user = [
    { "first Name" : "Nagam", "Age" : 19 },
    { "first Name" : "vedika", "Age" : 19 },
    { "first Name" : "Sonali", "Age" : 19 },
    { "first Name" : "Ashwini", "Age" : 19 }
];

// user.forEach(function(user){
//     console.log(user["first Name"]);
// });


// Using arrow function
user.forEach((user, index)=>{
    console.log(user["first Name"], user["Age"], index);
});


// Using for of loop
// In for of loop always right plural of variable for your understanding 
// for(let users of user){
//     console.log(users["first Name"]);
// }

// since forEach method does not return new array it will return undefined 
const twoMutiple =  numbers.forEach(function(number){
    return (number*2);
});

console.log(twoMutiple);