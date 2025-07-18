const newTask = document.getElementById("todo-input");
const messageTask = document.getElementById("todo-ul");

function addTask(event) {
    newTask.value = newTask.value.trim();
    if (newTask.value === "") {
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="todo-text">${newTask.value}</span> <button class="delete-btn">Delete</button>`;
    messageTask.appendChild(li);
    newTask.value = "";

    const deleteBtn = li.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
        messageTask.removeChild(li);
    });
}