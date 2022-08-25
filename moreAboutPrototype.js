// first wary for creating array using new keyword
// javaScript create array using new keyword internally it will give same output as we create array using second method 
// const numbers = new Array(1, 2, 3);
// console.log(numbers);

// seocond(short cut) way for creating array
const numbers = [1, 2, 3];
console.log(numbers);

// how to see prototype property of an array 
console.log(Object.getPrototypeOf(numbers));
