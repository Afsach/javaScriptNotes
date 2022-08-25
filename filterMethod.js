// filter method always return boolean values
// it takes callback function as a input 
// it will filter the array as our desired conditon return new array

const number = [21, 4, 63, 14, 23, 26, 32];

const Even = function(number){
    return number%2===0;
}
const EvenNumber = number.filter(Even);
console.log(EvenNumber);

// if we do not return it and directory do console.log() the is will only print true and false not the true or false value
// const number = [21, 4, 63, 14, 23, 26, 32];

// const Even = function(number){
//     console.log(number%2===0);
// }
// number.filter(Even);
