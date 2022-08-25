//

function about(musician="", hobby=""){  // here we have use default parameter
    console.log(this.firstName, this.age, musician, hobby);
}

const user1 = {
    firstName : "Zohan",
    age : 3

    //we can define about function outsite this user1 object comment this function to see output
    // about : function(musician="", hobby=""){  // here we have use default parameter
    //     console.log(this.firstName, this.age, musician, hobby);
    // }
}

const user2 = {
    firstName : "Neymat",
    age : 5,
}

const user3 = {
    firstName : "Zaid",
    age : 2,
}

//user1.about();

// for setting the this property for object method about
// user1.about.call(user1); // meaning of line number 21 is also same as 24 line
// user1.about.call(user2);
// user1.about.call(user3);

// we can send extra arguments which are not defined in object 
about.call(user1, "Guitar", "Rinding");
