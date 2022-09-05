export class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info(){
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
    }
}

export class Person2{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info(){
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old and it is in Person2 class`);
    }
}

// for default export we can use custom name at the time of importing 
// we can all default export a variable 
const hello = "hello world";
export default hello;
