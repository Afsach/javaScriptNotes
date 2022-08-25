//Object
//React

const company = {
    microsoft : "cloud",
    Amazon : "product sevices",
    flipcart : "shopping market"
}

// console.log(company);

// function compDetails(obj){
//     console.log(obj.microsoft);
//     console.log(obj.Amazon);
//     console.log(obj.flipcart);
// }

// compDetails(company);


function compDetails({microsoft, Amazon, flipcart}){
    console.log(microsoft);
    console.log(Amazon);
    console.log(flipcart);
}

compDetails(company);