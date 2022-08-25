// it is and array method
// take callback function as input 
//returns first occurence of true condition
const myArray = ["Baff", "Potato", "Vegitables", "Orange", "Carrot"];
function isLength6(String){
    return String.length === 6; 
}

const ans = myArray.find(isLength6);
console.log(ans);// returns first occurence of true condition 
// Potato 

// 2nd way 
//console.log(myArray.find((String)=>String.length===10));    //using arrow function

// Example:-
const users = [
    {userID :1, userName : "Harshit"},
    {userID :2, userName : "vinay"},
    {userID :3, userName : "Ajay"},
    {userID :4, userName : "Varsha"},
    {userID :5, userName : "Patel"}
];

const user = users.find((user)=> user.userName === "Ajay");
console.log(user);
console.log(user === users);
console.log(users.find((user)=> user.userID === 4));