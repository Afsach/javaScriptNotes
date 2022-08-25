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
        super();
        this.name = name;
        this.age = age;
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
console.log(monty.colour())