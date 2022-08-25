function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);  // it will add all the method present in createUser prototype in [[prototype]] of user Object
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

// adding method in prototype of function
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`
};

createUser.prototype.is18 = function(){
    return this.age >=18; 
};

createUser.prototype.sing = function(){
    console.log("la la la");
}

const user1 = createUser("heena", "khanna", "heena@gmail.com", 22, "Virar");
const user2 = createUser("meena", "anna", "meena@gmail.com", 4, "Virar");
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