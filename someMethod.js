// some is an array method 
// it returns boolean values
const numbers = [2, 4, 6, 8, 9, 10];  // remove 9 from the array to see change in output
console.log(numbers.some((numbers)=> numbers % 2 != 0));   // it check is their any number which is not even
// is returns boolean values 

// to check any item in product which has price less than 25000
const product = [
    {productID:1, productName: "Mobile", Price:23000}, 
    {productID:2, productName: "Laptop", Price:28000}, 
    {productID:3, productName: "Fridge", Price:29000}, 
    {productID:4, productName: "Machine", Price:1000}, 
    {productID:5, productName: "Fan", Price:15000}, 
]

console.log(product.some((cartItem)=>cartItem.Price<25000)); // change the price to greater than 25000 of product to see changes