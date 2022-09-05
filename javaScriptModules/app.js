// import {firstName as fname } from "./utils/fname.js"; // to change the import data name to fname
import {firstName} from "./utils/fname.js";


// import {age as a} from "./utils/age.js"; // to change the import data name to a;
import {age} from "./utils/age.js";
import something, {Person2, Person} from "./utils/Person.js";


// console.log(firstName + " " +  age);
console.log(firstName, age);

const person = new Person("John", "Doe", 22);
console.log(person);
person.info();

const person2 = new Person2("John", "Doe", 22);
console.log(person2);
person2.info();

console.log(something);