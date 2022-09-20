const bucket = ["coffee", "chips", "rice", "salt", "vegetables"];

// promise takes a call back function with two parameter resolve and reject we can name these parameter as we required 
// Promise is a javascript class we write its first letter to capital like 'Promise' 
// promise is asynchronous in nature 
// promise goes in microtakst queue not in callback queue
// it executes before setTimeOut and setIterval

setTimeout(() => {
    console.log("Inside SetTimeOut");
    clearTimeout(intervaId);
}, 5000);

const intervaId = setInterval(() => {
    console.log("inside setInterval");
}, 1000);

const promiseFriedRice = new Promise((resolve, reject) => {
    if (bucket.includes("rice") && bucket.includes("vegetables") && bucket.includes("salt")) {
        // resolve is a method it can be anything a function string object or array 
        // resolve({value : "FriedRice"});
        resolve("Fried Rice promise completed");
    } else {
        // reject  is a method it can be anything a function string object or array 
        reject("Not able to complete promise");
        // reject(new Error("Promise is not completed"));
    }
});

// first way to resolve error
// here we are resolving promise
// .then is used to resolve promise
// it takes two callback function we can name then anything but by convenstion it is resolvse and reject
// promiseFriedRice.then(
//     // on reloving promise
//     (resolve) => {
//         console.log(resolve);
//     },
//     // on rejecting promise
//     // reject the promise remove rice from the bucket array
//     (reject) => {
//         console.log(reject);
//     }
// );


// second to resolve or reject a promise
promiseFriedRice.then(
        // on reloving promise
        (resolve) => {
            console.log(resolve);
            console.log("Lets eat...", resolve);
        }
    ).catch(
        // on rejecting promise
        // reject the promise remove rice from the bucket array
        (reject) => {
            console.log(reject);
        }
    );


    for(let i=0; i<=100; i++){
        console.log(Math.random()*100);
    }