// new keyword
// create empty object {} and set its value to "this" i.e. this = {}
// const user = Object.create(createUser.prototype); does this work by itself no need to write manually
// and return this = {} object also by itself

// constructor function
// to know we are going to call this function using new keyword we will write function name in PascleCase(first letter capital)
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    //return user;    // new keyword will return this automatically if you comment this output will be same
}

// adding method in prototype of function
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`
};

CreateUser.prototype.is18 = function(){
    return this.age >=18; 
};

CreateUser.prototype.sing = function(){
    console.log("la la la");
}

const user1 = new CreateUser("heena", "khanna", "heena@gmail.com", 22, "Virar");
const user2 = new CreateUser("meena", "anna", "meena@gmail.com", 4, "Virar");
const user3 = new CreateUser("teena", "sinhna", "teena@gmail.com", 20, "Vashi");
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