// promise.resolve()
// it take a value and return a promise we can store the value in a variable and resolve the promise using .then()
// .then() always returns a promise

// const myPromise = Promise.resolve(5);
// myPromise.then((value)=>{
//     console.log(value);
// })


// Promise Chaining
// if we do not return a promise it will return undefined by default
const myPromise = function() {
    return new Promise((resolve, reject) => {
        return resolve("Promise");
    })
}

myPromise().then(
    (value) => {
        console.log(value);
        value += " resolve";
        return value;
    }
).then(
    (value) => {
        console.log(value);
        value += " in chaining";
        return value
    }
).then(
    (value) => {
        console.log(value);
    }
)

// function myPromise(){
//     return new Promise()
// }