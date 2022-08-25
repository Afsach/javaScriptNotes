// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const user1 = new Person("Hema", "Malini");
// console.log(user1);
// console.log(user1.fullName());


// if I want to access full name method like this -->  console.log(user1.fullName)
// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const user1 = new Person("Hema", "Malini");
// console.log(user1);
// // console.log(user1.fullName()); // now it will give error if you call fullName like this 
// console.log(user1.fullName);

// if you want to set firstName and lastName property
// 1st way
// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }

//     setName(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const user1 = new Person("Hema", "Malini");
// console.log(user1);
// // console.log(user1.fullName()); // now it will give error if you call fullName like this 
// user1.setName("Mona", "Beni");
// console.log(user1.fullName);

// 2nd way 
// user1.firstName = "Himalya";
// user1.lastName = "Everest";
// console.log(user1.fullName);

// 3rd way 
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName){
        [this.firstName, this.lastName] = fullName.split(" ");   
    }
}

const user1 = new Person("Hema", "Malini");
console.table(user1);

user1.fullName = "Mount Everest";
console.log(user1.fullName);