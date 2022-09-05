console.log("script start !!!");
const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPost(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     const data = await response.json();
//     return data;
// }

// using arrow function 
// all this function will run in background

const getPost = async() => {
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong");
    }
    const data = await response.json();
    return data;
}

getPost()
    .then((myData) => {
        console.log(myData);
    }).catch((error) =>{
        console.log("Inside Catch");
        console.log(error);
    });

console.log("Script End");
