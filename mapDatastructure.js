// maps
// map is an iterable
// store data in an order format
// store key value pair like objects
// duplicate key not allowed like objects
// difference between map and object:-
// i. object can have string and symbols as key 
//ii. in map use can use any datatype as key like array string symbol number

const person = {
    firstName : "Abhinav",
    age : 55,
    1 : "one"
}

// acess object values first way
console.log(person.firstName);

// acess object values second way
console.log(person["firstName"]);

// how to check data type of key in object 
for (let key in person){
    console.log(key, typeof key);
}
// for in loop gives key of object


// map example
 const mapExample = new Map();

 // how to add value in map
 mapExample.set("firstName", "Rakesh");
 mapExample.set("age", 45);
 mapExample.set(1, "one");
 mapExample.set([1,2,3,4], "array");
 mapExample.set({"key": "value"}, "obj");

 console.log(mapExample);

 //how to access values in map 
 mapExample.get("firstName");
 mapExample.get("age");
 mapExample.get(1);

 // how to get keys in map and their type 
 for (let key of mapExample.keys()){
    console.log(key, typeof key);
 }

 // for of loop in map give key value pair in array format
 for(let mapExamples of mapExample){
    console.log(mapExamples);
 }

//  to check it for of loop gives array or Not
for (let example of mapExample){
    console.log(Array.isArray(example));
}

// destructuring map in for of loop
for (let [key, value] of mapExample){
    console.log(key, value);
}

// we can directly add key value pair in map in array format
const newMap = new Map([["firstKey", "value1"], ["secondKey", "value2"], ["thirdKey", "value3"]]);
console.log(newMap);

// real life example of map
const user1Info = {
    userID : 1,
    userName : "Trimurti"
}

const user2Info = {
    userID : 1,
    userName : "rimurti"
}

const userExtraInfo = new Map()
userExtraInfo.set(user1Info, {age: 52, Gender : "Male"});
userExtraInfo.set(user2Info, {age: 51, Gender : "Male"});
console.log(userExtraInfo);

// how to access data from userExtraInfo 
console.log(userExtraInfo.get(user1Info).age);
console.log(userExtraInfo.get(user2Info).Gender)
