const numbers = [45, 78, 95, 5, 6, 10, 12];
// numbers.sort();
// console.log(numbers);
// sort method sort the number as a ascii characters 
// it will compare the first digit of each number with ascii character and on the basis of this it perform sorting of number array list
// output : [10, 12, 45, 5, 6, 78, 95]


// sort method take callback function as input 
// if we want to sort the numbers then  pass two parameter a and b and perform a-b for ascending order and for descending order b-a

//in ascending order
console.log(numbers.sort((a, b) => a - b));  // using call back function
output: [5, 6, 10, 12, 45, 78, 95]

// in decending order 
console.log(numbers.sort((a, b) => b - a));
output: [95, 78, 45, 12, 10, 6, 5]


// 2nd way 

console.log(numbers.slice(0).sort((a, b) => a - b)); // this method is for sorting  object arrays
const words = ["Abhay", "Burak", "Aman", "Sheetal", "roshni", "malini"];
console.log(words.sort());
// Capital alphabets range between 65 to 90 so it will come first in list after that small letters 91 to 116
// output : ['Abhay', 'Aman', 'Burak', 'Sheetal', 'malini', 'roshni'] 

//sorting array object with respect to low to high price
const products = [
    { prodID: 1, price: 250 },
    { prodID: 2, price: 200 },
    { prodID: 3, price: 450 },
    { prodID: 4, price: 120 }
];

// it will sort projct array object with respect to price in ascending order 
// const prodcutPrice = products.sort((a,b)=>{
// return (a.price - b.price);
// });
// console.log(prodcutPrice);

// for checking prodcutPrice and products are equal or not 
//console.log(prodcutPrice === products);

// since we have check sort method change the actual array so to ignore this we can clone array in new array 

const prodcutPrice = products.slice(0).sort((a, b) => {
    return (a.price - b.price);
});
console.log(prodcutPrice);
console.log(prodcutPrice === products);