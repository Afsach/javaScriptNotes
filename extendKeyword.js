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
    
}

const monty = new Dog("Kitty", 2);
console.log(monty.eat());
console.log(monty.isCute());
console.log(monty.isSuperCute());
