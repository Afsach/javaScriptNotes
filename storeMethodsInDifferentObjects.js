// create function(to create new object for every new user) that 
// 1) create users
// 2) add key value pair to user object
// 3) return object

// create object mehtod outside method for less memory consumption
const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old.`
    },
    is18 : function(){
        return this.age >=18; 
    },
    sing : function(){
        console.log("la la la")
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}

const user1 = createUser("heena", "khanna", "heena@gmail.com", 14, "Virar");
const user2 = createUser("meena", "anna", "meena@gmail.com", 24, "Virar");
const user3 = createUser("teena", "sinhna", "teena@gmail.com", 20, "Vashi");
console.log(user1);
console.log(user2);
console.log(user3);

const aboutUser1 = user1.about();
console.log(aboutUser1);

const aboutUser2 = user2.about();
console.log(aboutUser2);

const aboutUser3 = user3.about();
console.log(aboutUser3);

const is18 = user1.is18();
console.log(is18);