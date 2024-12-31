// Hoisting only perform in case of function declaration
// it will not going to run in fuction expression or arrow function 
// it is only going to work in function declaration
hello(); 
function hello(){
    console.log('hoisting in function declation')
}

// console.log("hoisting inside function declaration using var")
// hello();
// var hello = function(){
//     console.log("hoisting inside function declaration using var")
// }

// console.log("Hoisting inside arrow function using var");
// hello();
// var hello = ()=>{
//     console.log("Hoisting inside arrow function using var");
// }


// function hello(){
//     console.log("hello world");
// }
// hello();

// variable created using var will return undefined before intializatin 
// console.log(hello);
// var hello = "hello world";

// let and const are going to through error before initialization of variable 
// console.log(hello);
// let hello = "hello world";

// console.log(hello);
// const hello = "hello world";


