// objects:- It is reference data type
// objects store key value pair
// objects don't have index number

//with dot(.) notation
// const person = {
//     name : "Nagma",
//     age : 19,
//     clg : "Sahyog",
//     Hobbies : ["sleeping", "eating"]
// }

// console.log(typeof person);

// // how to access object data
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.clg);
// console.log(person.Hobbies);

// // how to add key value pair to object 
// person.gender = "Female";
// person.hair_color = "brown";
// console.log(person);

//with bracket[] notation
const key = "email";
const person = {
    "name" : "Nagma",
    "age" : 19,
    "clg" : "Sahyog",
    "Hobbies" : ["sleeping", "eating"]
}

console.log(typeof person);

// // how to access object data
console.log(person);
console.log(person["name"]);
console.log(person["age"]);
console.log(person["clg"]);
console.log(person["Hobbies"]);

// // how to add key value pair to object 
person["gender"] = "Female";
person["hair color"] = "brown";
console.log(person);

// person.key = "nagma1804@gmail.com"; // it will add "key" as key in object
// console.log(person);

person[key] = "nagmaansari3190@gmail.com"; // it will add "email" as key in object
console.log(person);

// // how to iterate objects
// // for in loop
// for(let key in person){          // we can change key to any variable name 
//     console.log(person); // to get keys of object 
// }   

// for(let key in person){
//     console.log(person[key]); // to get value of object 
// }


// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }

// object
// Object.keys ==> gives keys of object in the form of array
// console.log (Object.keys(person));
// console.log(typeof Object.keys(person));
// const val = Array.isArray(Object.keys(person));
// console.log(val);

// computed properties 
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myValue1";
const value2 = "myvalue2";

// first method 
let obj = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj);

// second method
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

