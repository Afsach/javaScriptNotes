let myFruits = ["apple", "mango", "grapes", "banana"];

// for in loop gives index of array 
for(let index in myFruits){
    console.log(index);
}

// here we are creating an empty array 
const fruits = [];

// here we are adding element of myFruits array to empty array fruits
for(let index in myFruits){
    fruits.push(myFruits[index].toUpperCase());
}

//here we are priting the new array created by pushing elements of myFruits
console.log(fruits);

