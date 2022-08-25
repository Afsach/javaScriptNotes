// how to create array
// Array:- Is a ordered collection of items 
// array is refference datatype
let fruits = ["apple", "Mango", "Grapes"];
let numbers = [ 1, 2, 5, 6, 4, 7, 90, 45];
let mixed = ["banana", "pomegranates", null, undefined, true, false, 3, 6, 0];

console.log(fruits);
console.log(numbers);
console.log(mixed);

fruits[2] = "watermelon";
console.log(fruits);

console.log(typeof fruits);

// how to check array is array
console.log(Array.isArray(fruits));

let obj = {};
console.log(typeof obj);
console.log(Array.isArray(obj));

// array push
fruits.push("lemon");
console.log(fruits);

// array pop it remove last element and also returns it 
let poppedFruit = fruits.pop();
console.log(poppedFruit);
console.log(fruits);

// array unshift it add element from staring 
fruits.unshift("Orange");
console.log(fruits);

// array shift it remove element from staring and returns it
let shiftedFruit = fruits.shift();
console.log(shiftedFruit);
console.log(fruits);

//Premitive V/s Reference type
let num1 = 21;
let num2 = num1;
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);
num1++;
console.log("After increamenting num1",num1);
console.log("Value of num2 is",num2);

//Reference type
let Array1 = ["item1", "item2", "iems3"];
let Array2 = Array1;
console.log("Array1", Array1)
console.log("Array2", Array2)

Array1.push("item4");
console.log("After pushing item4 in Array1")
console.log("Array1 = ", Array1);
console.log("Array2 = ", Array2);

// how to check arrays are same
console.log(Array1 === Array2);

// How to concate to arrays
let array3 =["item5", "item6"];
let array4 = ["item6", "item7"];
console.log(array3 === array4);

// first method 
array3.push("item8");
console.log(array3);
console.log(array4);

// second method
let array5 = array3.slice(0);
console.log( "array5 = ", array5);
let array6 = [].concat(array4);
console.log(array6);

let array7 =[].concat(array6,["item9", "item10"], ...array3);
console.log(array7);

// third method (...spread operator)
let array8 = [...array5, ...array4, ...array7, "item11"].concat(array5);
console.log(array8);


