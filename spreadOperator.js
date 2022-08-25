// spread operator 
const  array1 = [ 1, 2, 3]; 
const  array2 = [ 4, 5, 6];
const array3 = [...array1, ...array2];
console.log(array1);
console.log(array2);
console.log(array3)

const newArray = [..."123456789"];
console.log(newArray);

const newArray1 = [..."abcd"];
console.log(newArray1);

// spread operator in object
const obj = {
    "key1" : "valu1",
    "key2" : "value2",
    "key3" : "value3"
}
const obj1 = {
    "key4" : "value4",
    "key5" : "value5"
}

const newObj = { ...obj, ...obj1}
console.log(newObj);

console.log([key4]);

const newObj1 = [..."abcdefghijklmnopqrstuvwxyz"];
console.log(newObj1);
console.log(newObj1.length);
console.log(newObj1[23]);

