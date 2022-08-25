// function can return anything like integer, character, string, array, object and function etc.
// When we accept input as a function or return function as a input or do both it is called  higher order function 

const func = function(){
    function hello(){
        return "hello world";
    }
    return hello;
}

const returnF = func();
console.log(returnF);
console.log(returnF());  //It will also become function because we are storing a function in returnF variable

// function func (){
//     return function(){
//         return "Hello return";
//     };

// }

// const returnF = func();
// console.log(returnF);
// console.log(returnF());

 
