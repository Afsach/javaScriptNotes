//bind will return a function 

function about(musician="", hobby=""){  // here we have use default parameter
    console.log(this.firstName, this.age, musician, hobby);
}

const user1 = {
    firstName : "Zohan",
    age : 3
}

const user2 = {
    firstName : "Neymat",
    age : 5,
}

const user3 = {
    firstName : "Zaid",
    age : 2,
}


// we can send extra arguments which are not defined in object 
const returnedFunction = about.bind(user1, "Guitar", "Rinding");
returnedFunction()