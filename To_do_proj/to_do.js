// console.log("To Do List Application");
const todolist = []; 
displayTodos(); // Initial call to display empty list

function addTodo(){
    const inputElement = document.querySelector('.input_field');
    const toDoItem = inputElement.value;
    console.log(toDoItem);
    todolist.push(toDoItem);
    inputElement.value = '';
    displayTodos();



}
function displayTodos(){
    const displayElement = document.querySelector('.display_list');
    displayElement.innerHTML = ''; // Clear previous list
    for(i =0; i< todolist.length; i++){
        // const listItem = document.createElement('li');
        // listItem.textContent = todolist[i];
        // displayElement.appendChild(listItem);
        displayElement.innerHTML = displayElement.innerHTML + `<li>${todolist[i]}</li>`;

    }
}
