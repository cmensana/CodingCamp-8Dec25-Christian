let todo = [];

/// Menambahkan To Do baru
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');
    const todoList = document.getElementById('todo-list');
    const text = todoInput.value.trim();
    const date = todoDate.value;

    console.log("Input Value=",todoInput.value);
    console.log("Date Value=",todoDate.value);

    if (text==="")return;

      // Hapus "No todo available" jika list pertama kali ditambah
    if (todoList.children[0].innerText === "No todo available") {
        todoList.innerHTML = "";
    }

    // Elemen LI
    const li = document.createElement("li");
    li.className = "flex items-center justify-between bg-gray-50 border border-gray-200 p-3 rounded-lg";

    // Kiri: Checkbox + Text
    const leftBox = document.createElement("div");
    leftBox.className = "flex items-center gap-3";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "w-5 h-5 accent-green-500";

    const span = document.createElement("span");
    span.textContent =  `${text} (${date})`;
    

    // Saat checklist diklik
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            span.classList.add("line-through", "text-gray-400");
        } else {
            span.classList.remove("line-through", "text-gray-400");
        }
    });

    leftBox.appendChild(checkbox);
    leftBox.appendChild(span);

    // Tombol Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm";

    deleteBtn.onclick = () => li.remove();

    // Masukkan ke <li>
    li.appendChild(leftBox);
    li.appendChild(deleteBtn);

    // Tambahkan ke list
    todoList.appendChild(li);

    // Reset input
    input.value = "";
    dateInput.value = "";

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