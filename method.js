// method
// function inside object is a method me javaScript

const person = {
    firstName : "Suhani",
    age : 62,
    about : function(){
        console.log(`my name is ${this.firstName} and age is ${this.age}`)
        // console.log(this);
    }
}

// console.log(person.about)  // will print all the function as it is written
person.about();

const personInfo = function (){
    console.log(`my name is ${this.firstName} and age is ${this.age}`)
}

const person1 = {
    firstName : "Sonu",
    age : 62,
    about :personInfo
}

const person2 = {
    firstName : "Suhani",
    age : 62,
    about : personInfo
}

const person3 = {
    firstName : "Suhana",
    age : 60,
    about : personInfo
}

person1.about();
person2.about();
person3.about();