// data type (primitive data types)
// String
// Number
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 19;
let myName = "Nagma";
console.log(typeof (age));
console.log(typeof(myName));

// convert number to  string
age = "19";
console.log(typeof(age));

// convert string to number
age = +"19";
console.log(typeof age);

// string concatenate means joining of strings

let firstName = "Nagma";
let lastName = "Ansari";
console.log(firstName + " " + lastName);

// template string
console.log(`My name is ${firstName} ${lastName} and my age is ${age}`);

// BigInt
let myNumber = 123;
let secNumber = 45;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
let diffNumber =BigInt(4125325698542365852452134525622455214522789212);
console.log(diffNumber);
console.log(secNumber + myNumber);

// booleans only returns true and falsy value 
let a = 400, b = 600;
console.log(a<b);
console.log(a>b);

// if(a<b)
// {
//     console.log("a is greater than b");
// }
// else{
//     console.log(" a is less than b");
// }

if(a<b){
    console.log("a is less than b");
}
else if(a===b){
    console.log("a is equal to b");
}
else if(a>b){
    console.log("a is greater than b");
}
else if(a!==b){
    console.log("a is not equal to b")
}