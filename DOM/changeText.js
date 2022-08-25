const main_heading = document.querySelector(".headline");
// before changing actual content
//console.log(main_heading.textContent);

// after changing actual content by textContent
// main_heading.textContent = "Schedule your task by writting them";
//console.log(main_heading.textContent);

// by innerText
console.log(main_heading.innerText);  // it will not show hidding content 
main_heading.innerText = "Schedule your task by writting them";
console.log(main_heading.innerText);