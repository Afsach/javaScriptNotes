const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.onload = () =>{
    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);
        console.log(data);
        // getting a single post 
        const id = data[3].id;
        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        console.log(URL2)
        xhr2.open("GET", URL2);
        xhr2.onload = () => {
            const data2 = JSON.parse(xhr2.response);
           console.log(data2);
        }
        xhr.send()
    }else{
        console.log("Something went wrong !");
        console.log(xhr)
    }
}


//handling netword Error
xhr.onerror = () => {
    console.log("Network Error");
}
xhr.send();