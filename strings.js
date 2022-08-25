"use strict";
let firstName = "Nagma";
let lastName = "Ansari";
let fullName = "      Nagma Ansari   ";

// string length
console.log(firstName.length);
console.log(lastName.length);
console.log(fullName.length);

// index of string
console.log(firstName[0]); 
console.log(firstName[firstName.length-1]) // finding which character is at last index of variable
console.log(fullName);
console.log(fullName[10]); // index number also includes blank spaces 

// methods of string:- trim()
//                     toUpperCase()
//                     toLoweCase()
//                     slice() extracts a part of a string and returns the extracted part in a new string.

console.log(fullName.length);
fullName = fullName.trim(); // trim only remove left to right blank spaces
console.log(fullName);
console.log(fullName.length);

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.slice(0,6)); //first index and last index of string which you want ii) we have trim the spaces thats why its show first 6 characters of string others wise it will show first 6 blanks spaces of sstring you can check it by commenting line number 23 and 24