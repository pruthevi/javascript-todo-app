function addTask() {
    var todoInput = document.getElementById("taskInput");
    var todoText = todoInput.value.trim();

    if (todoText !== "") {
        var taskList = document.getElementById("taskList");

        var li = document.createElement("li");
        li.textContent = todoText;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");


        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);

        taskList.appendChild(li);

        todoInput.value = "";
    }
}
