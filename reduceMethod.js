// reduce is an array method
// 
let number = [23, 45, 58, 65, 32, 15, 56];


// const sum = number.reduce((accumulator, currentvalue)=>{
//     return accumulator + currentvalue;
// });
// console.log(sum);

// we can also pass initial value(accumulator) 
const sum = number.reduce((accumulator, currentvalue)=>{
    return accumulator + currentvalue;
},100);
console.log(sum);

const userCart = [
   { productId:1, productName :"Mobile", price:45000},
   { productId:2, productName :"Keyboard", price:4000},
   { productId:3, productName :"Laptop", price:75000},
   { productId:4, productName :"TV", price:10000}
];

const totalProductPrice = userCart.reduce((totalPrice, productPrice)=>{
    return totalPrice + productPrice.price;
},0);  //0 is accumulator value for reduce method if we do not provide initail value by default arrays first element wil be consider as accumulator value and second element will be current value
// we can intialize accumultor or firstParamenter of reduce method with any integer value
console.log(totalProductPrice);


// totalPrice       productprice        return
//  0                   45000           45000
// 45000                4000            49000
// 49000                75000           124000
// 124000               10000           134000
