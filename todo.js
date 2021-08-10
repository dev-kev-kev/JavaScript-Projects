//selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//event listeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions

function addTodo(event) {             //e = event

    //prevent form from submitting
    event.preventDefault();

    //create todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedBtn = document.createElement('button');
    completedBtn.classList.add('complete-btn');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(completedBtn);

    //trash button
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashBtn);

    //append to list
    todoList.appendChild(todoDiv);

    //clear the input
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();
    }

    //check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('todo-check')

    }
}