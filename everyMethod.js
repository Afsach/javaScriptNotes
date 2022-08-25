// every is an array method
// call back function returns boolean values and
// every method also returns boolean values i.e true/false
// every method is only going to return true if callback function return true for each element in array 
// as every method get a falsy value from callback method at that time it will false 
const numbers = [2, 4, 6, 8, 10];
//  function isEven(numbers){
//      return numbers % 2 == 0;
//  }

//  console.log(numbers.every(isEven));

// 2nd way 
console.log(numbers.every((n)=>n%2==0));

// check all product has price less than 25000
const product = [
    {productID:1, productName: "Mobile", Price:23000}, 
    {productID:2, productName: "Laptop", Price:28000}, 
    {productID:3, productName: "Fridge", Price:29000}, 
    {productID:4, productName: "Machine", Price:1000}, 
    {productID:5, productName: "Fan", Price:15000}, 
]

const productCart = product.every((cartItem)=>cartItem.price<25000);
console.log(productCart);