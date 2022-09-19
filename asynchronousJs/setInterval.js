console.log("Script start !");
// it takes two arguments 
// 1. a function
// 2. delay time 
// if we put delay time 0 then also it will execute after executing all js code
// it will execute after every time delay given in second args of function
// it will return a interval id which we can store in a const variable to clear it as we want

const intervalID =  setInterval(()=>{
    console.log("inside setInterval !");
}, 1000)

setTimeout(() => {
    console.log("inside setTimeOut !");
    clearInterval(intervalID);
},1000)

console.log("Script end !");