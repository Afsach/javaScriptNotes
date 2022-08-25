const  users = [
    {userId :1, firstName : "manish", gender : "male"},
    {userId :2, firstName : "mohit", gender : "male"},
    {userId :3, firstName : "nithesh", gender : "male"}
];
console.log(users);

for(let user of users){
    console.log(user.userId);
    console.log(user.firstName);
    console.log(user.gender);
}