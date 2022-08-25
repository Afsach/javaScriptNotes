// hasOwnProperty() will return only function property not prototype propery

// function to create multiple object
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

// to check functions own property only
for(let key in user1){
    //console.log(key); // it will return all key present in user1 object including prototype property
    if(user1.hasOwnProperty(key)){
        console.log(key); // it will print all key present in user1 object 
    }
}

console.log(user1);
