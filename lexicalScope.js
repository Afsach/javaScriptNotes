// const myVar = "Global Value"
// const myApp = () => {
//     console.log("myApp");
//     const myVar1 = "value inside myApp function";
//     const myFunction = function(){
//         console.log("myFucntion is defined inside myApp function", myVar);
//     }

//     const myFunc = () => {
//         console.log("Inside myApp", myVar1);

//         function myFunc1(){
//             console.log("Value inside myFunc1n", myVar);
//         }
//         myFunc1(); //4
//     }
//     myFunction(); //2
//     myFunc(); //3
// }
// myApp(); //1
// console.log(myVar1);

// block scope vs function scope
// let and const are block scope
// var is function scope


// using let keyword
// let myVar = "Global Value"
// let myApp = () => {
//     console.log("myApp");
//     let myVar1 = "value inside myApp function";
//     let myFunction = function(){
//         console.log("myFucntion is defined inside myApp function", myVar);
//     }

//     let myFunc = () => {
//         console.log("Inside myApp", myVar1);

//         function myFunc1(){
//             console.log("Value inside myFunc1n", myVar);
//         }
//         myFunc1(); //4
//     }
//     myFunction(); //2
//     myFunc(); //3
// }
// myApp();

// using var keyword
// var myVar = "Global Value"
// var myApp = () => {
//     console.log("myApp");
//     var myVar1 = "value inside myApp function";
//     var myFunction = function(){
//         console.log("myFucntion is defined inside myApp function", myVar);
//     }

//     var myFunc = () => {
//         console.log("Inside myApp", myVar1);

//         function myFunc1(){
//             console.log("Value inside myFunc1n", myVar);
//         }
//         myFunc1(); //4
//     }
//     myFunction(); //2
//     myFunc(); //3
// }
// myApp();


// function scop
function func(){
    var num = 10;
    let num1 = 20;
    console.log("inside my func");
    function func1(){
        console.log("inside func1", num, num1);
    }

    func1();
    // func(); // if we call function inside same function it will go infinite loop
}

func()

{
    var num =10;
    let num1 = 20;
}

console.log(num)
console.log(num1);