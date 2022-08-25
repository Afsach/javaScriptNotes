// fill is an array method
// fill method (value, start, end);

// first use to fill the array with same value
const myArrya = new Array(10).fill(-1);
console.log(myArrya);


//second use to fill the array with value in  some range to array
const newArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
newArray.fill(8, 8, 19);
console.log(newArray);