// getting multiple element using getElementByclassName

// it will return html collection
// it is an array like object
// array like object => indexing, length property
// we cannot use forEach() method to iterate html Collection
// const navElements = document.getElementsByClassName("nav-items");
// console.log(navElements);
// console.log(navElements[2]);
// console.log(typeof navElements);
//for of loop

// getElementByTagName()
// it will return html collection
// it is an array like object
// array like object => indexing, length property
// we cannot use forEach() method to iterate html Collection
// const navElements = document.getElementsByTagName("a");
// console.log(navElements);
// console.log(navElements[2]);
// console.log(typeof navElements);
//simple for loop
//for of loop
// for(let navElement of navElements){
//     navElement.style.color = "black";
//     navElement.style.backgroundColor = "white";
// }
// we can use forEach loop by changing html collection to array by array.from() method
// const nav_element = Array.from(navElements);
// console.log(typeof nav_element);
// console.log(nav_element);
// nav_element.forEach((element)=>{
// element.style.backgroundColor = "green";
// element.style.fontWeight = "bold";
// });




// getiing multiple elements using querySelector
// it will return an NodeList
// we can use 
// simple for loop
// for of loop
// forEach() method
const navElements = document.querySelectorAll("a");
console.log(navElements);
console.log(navElements[1]);
console.log(typeof navElements);
navElements.forEach((element)=>{
    element.style.backgroundColor = "green";
    element.style.fontWeight = "bold";
    });