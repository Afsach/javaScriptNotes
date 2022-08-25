// object destructuring
const band = {
    "bandName" : "led zpplin",
    "famousSong" : "stair to heaven",
    "year" : "1999",
    "Date" : "45"
}

// first method
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// second method
const {bandName, famousSong} = band;
console.log(bandName);
console.log(famousSong);

//third method if you want to change variable name 
const {bandName:var1, famousSong:var2, ...restVar} = band
console.log(var1);
console.log(var2);
console.log(restVar);


// array destructuring
const myArray = ["item", "item1", "item2", "item3", "item4"];
const [array1, array2, array3, array4, array5] = myArray;
console.log(array1, array2, array3, array4, array5);
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);