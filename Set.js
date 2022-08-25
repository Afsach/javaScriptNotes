// set is an array like object 
// set is iterable
// set also has its own methods
// No index based access
// order is not guaranteed
// it does not allow duplicate value like arrays it only allow Unique item 
// we can extract unique elements from the array and it does affect the actual array
// we can store different datatyeps in sets
// Note :- if we create new array with [squre backets] then in javascript it always create new object no matter if the value in the array is same

const array1 = ["item1", "item2"];
const array2 = ["item1", "item2"];
// checking array1 and array2 is same or not
console.log(array1===array2);

// const numbers = new Set();
// numbers.add("One");
// numbers.add("One"); // it will not going to add in number object because it does not add duplicate values
// numbers.add("one"); // it will going to add in number object because it js is case sensitive it will take it as different values
// numbers.add([array1, array2]);
// numbers.add([array1, array2]);
// if(numbers.has("one")){  // .has() is used to check the content we are looking inside set it present or not it will return boolean values
//     console.log("One is present");
// }else{
//     console.log("One is not present");
// }

// console.log(numbers);

// since we sets are array like object we can use for of loop to iterate it
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);
numbers.add(8);

for(let number of numbers){
    console.log(number);
}

const newArray = [4,6,8,8,4,6,4,7,1,2,2,3,5];
const uniqueArray = new Set(newArray);
console.log(uniqueArray);
// we can not use length property in unique array it will return undefined
console.log(uniqueArray.length);

// but we can use size property to get the length of uniqueArray
console.log(uniqueArray.size);
// it will not affect the actual array
console.log(newArray);

// how to get length of uniqueArray second way using for of loop
let length = 0;
for (let element of uniqueArray){
    length++;
}
console.log(length);