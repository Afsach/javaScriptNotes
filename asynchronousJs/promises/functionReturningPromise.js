function promiseFriedRice() {
    const bucket = ["coffee", "chips", "rice", "salt", "vegetables"];
    return new Promise((resolve, reject) => {
        if (bucket.includes("rice") && bucket.includes("vegetables") && bucket.includes("salt")) {
            resolve("Fried Rice promise completed");
        } else {
            reject("Not able to complete promise");
        }
    })
}

promiseFriedRice().then(
    (resolve) => {
        console.log(resolve);
    }
).catch(
    (error) => {
        console.log(error);
    }
)