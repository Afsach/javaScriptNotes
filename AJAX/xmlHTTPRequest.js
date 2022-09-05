const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
// console.log(xhr.readyState);
// xhr.open("GET", URL);
// console.log(xhr.readyState);
// xhr.onreadystatechange = function(){
//     // console.log(xhr);
//     console.log(xhr.readyState);
// }
// // console.log(xhr);


// first way
xhr.open("GET", URL);

// this will run when readyState change
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4){
        // console.log(xhr.readyState);
        // console.log(xhr);
        // console.log(typeof xhr.response, xhr.response);

        // to convert JSON into object type
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data, data);
//     }
// }


// second way
// this will run when readyState becomes 4
xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}
xhr.send();