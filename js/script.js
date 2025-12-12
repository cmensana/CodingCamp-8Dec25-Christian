let todo = [];

/// Menambahkan To Do baru
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    console.log("Input Value=",todoInput.value);
    console.log("Date Value=",todoDate.value);

    /// Validasi input
if (todoInput.value === "" || todoDate.value === "") {
    alert("Please fill in both fields.");
}else{
    const todoObject = {
        task: todoInput.value,
        date: todoDate.value
    }
    todo.push(todoObject);

    renderTodo();  

    todoInput.value = "";
    todoDate.value = "";    
    }
}

function renderTodo() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = "";

    todo.forEach((todo, _) => {
        todoList.innerHTML += `
        <li>
            <p=class"text-2xl">${todo.task} <span class="text-sm text-gray-500">(${todo.date})</span></p>
        <hr />
        </li>`;
    });
}

function resetTodo() {
    todo = [];
    renderTodo();
}

function filterTodo() {
    const filterDate = document.getElementById('filter-date').value;
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ""; 
}