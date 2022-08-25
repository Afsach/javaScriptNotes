class Person{
    // adding static property it can only acess with class not by object of this
    static firstName = "user";
    static lastName = "address";
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    // creating static method it can only acess with class not by object of this
    static eat(){
        return `${this.firstName} is eating`;
    };

    isSuperCute(){
        return this.age <=1;
    };

    isCute(){
        return true;
    }
}

// we can create muliple object of one class
const person1 = new Person("Tony", "Stark", 2);
console.log(person1.fullName());

const person2 = new Person("Bruce", "Banner");
console.log(person2.fullName());

// console.log(person1.eat()); // it will give error static methods can only be access by class of that method
console.log(Person.eat());  // calling eat() method by Person class
console.log(Person.firstName);   // calling static property