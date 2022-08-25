const myArray = ["value1", "value2", "value3", "value4", "value5"];
let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log("myVar1 =", myVar1);
console.log("myVar2 =", myVar2);

// second method 
// let [myVar3, myVar4, myVar5] = myArray;
// console.log("myVar3 =", myVar3);
// console.log("myVar4 =", myVar4);
// console.log("myVar5 =", myVar5);

// if you want to skip a value
// let [myVar3, , myVar5] = myArray;
// console.log("myVar3 =", myVar3);
// console.log("myVar5 =", myVar5);

// third method
let myNewArray = myArray.slice(0);
console.log(myNewArray);

// fourth method
let [myVar3, myVar4, myVar5, ...myNewArray1] = myArray;
console.log(myVar3);
console.log(myVar4);
console.log(myVar5);
console.log(myNewArray1);
