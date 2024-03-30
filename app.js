// Add task function
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.innerHTML = `<span>${taskInput.value}</span>
                        <div>
                            <button class="btn update-btn" onclick="updateTask(this)">Update</button>
                            <button class="btn delete-btn" onclick="deleteTask(this)">Delete</button>
                        </div>`;
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task.");
    }
}

// Delete task function
function deleteTask(element) {
    var li = element.parentElement.parentElement;
    li.remove();
}

// Update task function
function updateTask(element) {
    var li = element.parentElement.parentElement;
    var taskSpan = li.querySelector("span");
    var updatedTask = prompt("Update task", taskSpan.textContent);

    if (updatedTask !== null && updatedTask.trim() !== "") {
        taskSpan.textContent = updatedTask;
    }
}





