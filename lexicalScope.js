// const myVar = "Global Value"
// const n = 10;
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
var myVar = "Global Value"
var n = 20;
var myApp = () => {
    console.log(myVar)
    console.log(n)
    console.log("myApp");
    var n = 12;
    console.log(n)
    var myVar1 = "value inside myApp function";
    var myFunction = function(){
        var myVar2 = "test"
        console.log("myFucntion is defined inside myApp function", myVar);
    }

    var myFunc = () => {
        console.log("Inside myApp", myVar1);
        //console.log("vaule of myFunction variable", myVar2);
        //we cant access the varaible created in same level of scope we need to defined 
        //variable one level up from the current function scope
        function myFunc1(){
            console.log("Value inside myFunc1n", myVar);
            console.log(n)
        }
        myFunc1(); //4
    }
    myFunction(); //2
    myFunc(); //3
}
myApp();


// function scope
// var num = 12;
// console.log("num in global scope : ", num)
// function func(){
//     console.log("number inside function before updating value", num) // it will give "undefined" value for number type variable
//     var num = 10;
//     console.log("inside my func" );
//     function func1(){
//         console.log("num inside nested function after updating value: ", num);
//     }

//     func1();
//     // func(); // if we call function inside same function it will go infinite loop
// }

// func()


// if(num.length >0){
//     console.log("num in if block :", num)
//     num= 20;
// }

// console.log("num after if block : ", num)
// console.log(num);