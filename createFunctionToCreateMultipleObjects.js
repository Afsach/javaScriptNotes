// const user = {
//     firstName : "harshit",
//     lastName : "Vashistha",
//     email : "harshit@gmail.com",
//     age : 4,
//     address : "House no, Colony, pin-code",
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`
//     }, 
//     is18 : function(){
//         return this.age >=18; 
//     }
// }

// const aboutUser = user.about();
// console.log(aboutUser);

// create function(to create new object for every new user) that 
// 1) create users
// 2) add key value pair to user object
// 3) return object

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`
    };
    user.is18 = function(){
        return this.age >=18; 
    }
    return user;
}

const user1 = createUser("heena", "khanna", "heena@gmail.com", 14, "Vasai Virar");
console.log(user1);

const aboutUser1 = user1.about();
console.log(aboutUser1);

const is18 = user1.is18();
console.log(is18);

