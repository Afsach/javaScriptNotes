//apply and call is alomost same the difference is just when we pass extra aguments we pass it as array see line number 35

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
about.apply(user1, ["Guitar", "Rinding"]);
