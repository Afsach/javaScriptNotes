// while creating method it is not requred to write key for function

// without using short syntax
// const user = {
//     firstName : "Hema", 
//     age : 69,
//     about : function(){
//         console.log(this.firstName, this.age);
//     }
// }

// using short syntax
const user = {
    firstName : "Hema", 
    age : 69,
    about(){
        console.log(this.firstName, this.age);
    }
}

user.about()