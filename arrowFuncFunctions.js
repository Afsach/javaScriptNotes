// arrow function does not have this property it takes this from its surroundings
// arrown function take this one level up from its claration block

// with arrow function
const user1 = {
    firstName : "heena",
    age : 92,
    about : ()=>{
        console.log(this) // it will give window object
    }
}

// without arrow function
const user2 = {
    firstName : "heena",
    age : 92,
    about : function(){
        console.log(this) // it will give user2 object
    }
}

user1.about.call(user1);
user2.about.call(user2);