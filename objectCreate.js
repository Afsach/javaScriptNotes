const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

// Object.create is a way to create empty object
const obj2 = Object.create(obj1); // it wiil add obj1 value to obj2's [__proto__] or [[prototype]] after that we can acces obj1 value from obj2 itself
console.log(obj2.key1);

console.log(obj2); //  it will return empty object
obj2.key3 = "value3"; // adding value to obj2
obj2.key1 = "unique"; // adding same key as obj1 but different value so it will now print obj2.key1's value
console.log(obj2.key1);

// actual example
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
    const user = Object.create(userMethods);  // it will add all the method present in userMethods in [[prototype]] of user Object
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
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