// synchronous vs asynchronous


// synchronous way of writing js code 
// console.log("script start !");

// // this log calculation for loop willl block the further execution because js is single threaded language
// for(let i=1; i<=10000; i++){
//     console.log("inside for loop")
// }

// console.log("script end !");

// asynchronous way of writing js code 
console.log("script start !");

// setTimeOut is chromes browser method is will not block further execution of code 
// setTimeout execute at the end of js code
// it takes two arguments 
// 1. a function
// 2. delay time 
// if we put delay time 0 then also it will execute after executing all js code
// it will return a interval id which we can store in a const variable to clear it as we want
const intervalId = setTimeout(() => {
    for(let i=1; i<=10000; i++){
        console.log("inside for loop")
    }
}, 1000);
console.log("setTimeOut ID : ", intervalId);
// from here the setTimeOut() function will not execute since we have cleared its id
console.log("setTimeOut id is cleared");
clearTimeout(intervalId);
console.log("script end !");