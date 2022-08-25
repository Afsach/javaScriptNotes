const  users = [
    {userId :1, firstName : "manish", gender : "male"},
    {userId :2, firstName : "mohit", gender : "male"},
    {userId :3, firstName : "nithesh", gender : "male"},
    {userId :4, firstName : "nithesha", gender : "female"},
    {userId :5, firstName : "nihesh", gender : "male"}
];

// array destructuring 
// const [users1, users2, users3, users4] = users;
// console.log(users1, users2, users3, users4);

// nested destructuring
// const [{gender}, {userId, firstName}, , users4] = users;
// console.log(gender, userId, firstName, users4);

// change the variable name of objects key
const [{gender: sex}, {userId: rollNumber, firstName:Name}, , users4] = users;
console.log(sex);
console.log(rollNumber);
console.log(Name);
console.log(users4);

console.log(users);

