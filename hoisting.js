// Hoisting only perform in case of function declaration
hello(); 
// it will not going to run in fuction expression or arrow function 
// it is only going to work in function declaration

function hello(){
    console.log("hello world");
}
// hello();

// console.log(hello);
// variable created using var will return undefined before intializatin 
// var hello = "hello world";

// let and const are going to through error before initialization of variable 
// console.log(hello);
// let hello = "hello world";

// console.log(hello);
// const hello = "hello world";

