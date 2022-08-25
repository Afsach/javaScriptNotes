const myVar = "Global Value"
const myApp = () => {
    console.log("myApp");
    const myVar1 = "value inside myApp function";
    const myFunction = function(){
        console.log("myFucntion is defined inside myApp function", myVar);
    }

    const myFunc = () => {
        console.log("Inside myApp", myVar1);

        function myFunc1(){
            console.log("Value inside myFunc1n", myVar);
        }
        myFunc1(); //4
    }
    myFunction(); //2
    myFunc(); //3
}
myApp(); //1
// console.log(myVar1);

// block scope vs function scope
// let and const are block scope
// var is function scope
