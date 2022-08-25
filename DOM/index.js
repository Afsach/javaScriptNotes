// window.onbeforeunload = function() {
//     return "Are you sure you want to leave?";
// }
const formTodo = document.querySelector(".section-todo"),
todoInput = document.querySelector(".section-todo input[type='text']"),
todoItem = document.querySelector(".todo-list");

formTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newTodo = document.createElement("li");
    const newLi =`<span>${newTodoText}</span>
    <div>
        <button class="btn done ">Done</button>
        <button class="btn remove">Remove</button>
    </div>`;
    newTodo.innerHTML = newLi
    todoItem.append(newTodo); 
    todoInput.value = "";
});

todoItem.addEventListener("click", (e) => {
    //check if user click done button
    if(e.target.classList.contains("done")){
        const listtext =e.target.parentNode.previousElementSibling;
        listtext.style.textDecoration = "line-through";
        listtext.style.textDecorationColor = "green";
        listtext.style.textDecorationThickness = "2px";
    }
    //check if user click remove button
    if(e.target.classList.contains("remove")){
        const removeTodo = e.target.parentNode.parentNode;
        removeTodo.remove();
    }
});

