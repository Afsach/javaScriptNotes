const singHappyBirthday = ()=>{
    console.log("Happy birthday to you....");
}
singHappyBirthday();


// to add two numbers 
const sumOfTwoNumbers = (num1,num2) =>{
    return num1 + num2;
}
console.log(sumOfTwoNumbers(8,20));
console.log(sumOfTwoNumbers());
console.log(sumOfTwoNumbers(9));

// const isEven = (number) =>{
//     if(number%2===0)
//     {
//         return true;
//     }
//     return false;
// }


// to return true or false if number is even or odd
// const  isEven = (number) => {
//     return number%2===0;
// }

const isEven = number => number % 2 ===0;
console.log(isEven(93));


// to give first letter of any string 
// we can remove parenthesis from parameter if we pass single parameter in function
// const  firstChar = (str) => {
//     return str[0];
// }

const firstChar = str => str[0];
console.log(firstChar("Letter"));


// to index of an array in the given array if available inside an array else return -1;
const findTarget = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return -1;
}

const myArray = [4,3,5,3,5,2,9];
const indexOfTarget = findTarget(myArray,9);
console.log(indexOfTarget);