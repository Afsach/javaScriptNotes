
class CreateUser{
    constructor(firstName, lastName, email, age, address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`
    };

    is18(){
        return this.age >=18; 
    };   

    sing(){
        return ("la la la");
    }
}

const user1 = new CreateUser("heena", "khanna", "heena@gmail.com", 22, "Virar");
const user2 = new CreateUser("meena", "anna", "meena@gmail.com", 24, "Virar");
const user3 = new CreateUser("teena", "sinhna", "teena@gmail.com", 20, "Vashi");

console.log(user1);
console.log(user2);
console.log(user3);

console.log(user1.sing());
console.log(user2.about());
console.log(user3.is18());