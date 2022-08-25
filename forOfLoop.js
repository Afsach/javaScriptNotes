let myFruits = ["apple", "mango", "grapes", "banana"];
let fruits = [];

// for of will give elements of array 
for(let fruit of myFruits){
    console.log(fruit);
}

// here we are creating new array with the help of myFruits array element 
for(let fruit of myFruits){
    fruits.push(fruit.toUpperCase());
}

// here we are printing value of fruits array individually (not in for of loop) thats why it will print inn the form of array with proper index
console.log(fruits);