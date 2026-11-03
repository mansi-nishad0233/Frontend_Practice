
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add Task Function
addBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    // Check empty input
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";

    // Delete task on button click
    delBtn.addEventListener("click", () => {
        li.remove();
    });

    // Add Delete button to list item
    li.appendChild(delBtn);

    // Add task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
});
