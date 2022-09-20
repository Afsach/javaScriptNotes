const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


function functionChangeTextAndBackground(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.backgroundColor = color;
                resolve();
            } else {
                reject()
            }
        }, time)
    })   
}

functionChangeTextAndBackground(heading1, "Heading1", "blue", 1000)
    .then(() => functionChangeTextAndBackground(heading2, "Heading2", "green", 1000))
    .then(() => functionChangeTextAndBackground(heading3, "Heading3", "red", 1000))
    .then(() => functionChangeTextAndBackground(heading4, "Heading4", "purple", 1000))
    .then(() => functionChangeTextAndBackground(heading5, "Heading5", "indigo", 1000))
    .then(() => functionChangeTextAndBackground(heading6, "Heading6", "yellow", 1000))
    .then(() => functionChangeTextAndBackground(heading7, "Heading7", "pink", 1000))
    .then(() => functionChangeTextAndBackground(heading8, "Heading8", "violet", 1000))
    .then(() => functionChangeTextAndBackground(heading9, "Heading9", "cyan", 1000))
    .then(() => functionChangeTextAndBackground(heading10, "Heading10", "teal", 1000))
    .catch((error) => {
        alert("error occured");
    });

    // above code or below both function same 

// functionChangeTextAndBackground(heading1, "Heading1", "blue", 1000)
//     .then(()=>{
//         return functionChangeTextAndBackground(heading2, "Heading2", "green", 1000)
//     })
//     .then(()=>{
//         return functionChangeTextAndBackground(heading3, "Heading3", "red", 1000)
//     })
//     .then(() =>{
//         return functionChangeTextAndBackground(heading4, "Heading4", "purple", 1000)
//     })
//     .then(() =>{
//         return functionChangeTextAndBackground(heading5, "Heading5", "indigo", 1000)
//     })
//     .then(() =>{
//         return functionChangeTextAndBackground(heading6, "Heading6", "yellow", 1000)
//     })
//     .then(() =>{
//         return functionChangeTextAndBackground(heading7, "Heading7", "pink", 1000)
//     })
//     .then(() =>{
//         return functionChangeTextAndBackground(heading8, "Heading8", "violet", 1000)
//     })
//     .then(() =>{
//         return functionChangeTextAndBackground(heading9, "Heading9", "cyan", 1000)
//     })
//     .then(() =>{
//         return functionChangeTextAndBackground(heading10, "Heading10", "teal", 1000)
//     }).catch(
//         (error) => {
//            alert("error occured");
//         } 
//     )