class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`;
    };

    isSuperCute(){
        return this.age <=1;
    };

    isCute(){
        return true;
    }
}

const tommy = new Animal("tom", 1);
console.log(tommy);
console.log(tommy.eat());

// creating child class of Animal class

class Dog extends Animal{
    constructor(name, age, color){
        super(name, age);  // for accessing the parent class methods and variables. Without super() you can't use "this keyword" it give reference error
        this.color = color;
    }

    colour(){
        return `${this.name} is of ${this.color} color`;
    }
}

const monty = new Dog("Kitty", 2, "brown");
console.log(monty.eat());
console.log(monty.isCute());
console.log(monty.isSuperCute());
console.log(monty.colour());
 
// Lion class extending Animal class
class Lion extends Animal{
    constructor(name, speed){
        super(name);
        this.speed = speed;
    }

    // variable and method name can't be same it will give error
    run(){
        return `${this.name} is running at ${this.speed}kmph`;
    }
}

const Sher = new Lion("Tiger", 52);
console.log(Sher.run());


