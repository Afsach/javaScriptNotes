const user = {
    username : "Vimla",
    // address : {houseNo : 4521}
}

console.log(user);

console.log(user.username);
console.log(user.address);

// console.log(user.address.houseNo);
// console.log(user.address.houseNo); // to see the error comment line numver 3
//console.log(user.address); // to see the error comment line numver 3


// to get rid of line number 12 error use ?. insteand of only (.)

console.log(user?.address?.houseNo); // to see the error comment line numver 3
console.log(user?.address);



