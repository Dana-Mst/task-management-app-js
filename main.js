let taskList = [
  {
    id: 1,
    title: "Training Ajax",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "not_started",
    blockReason: "",
    priority: 1,
  },
  {
    id: 2,
    title: "Training Java ",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "not_started",
    blockReason: "",
    priority: 1,
  },  
  {
    id: 3,
    title: "Training Python",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "not_started",
    blockReason: "",
    priority: 1,
  },
  {
    id: 4,
    title: "Training JS",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "progress",
    blockReason: "",
    priority: 1,
  },   {
    id: 5,
    title: "Training React",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "blocked",
    blockReason: "requirements",
    priority: 1,
  },
  {
    id: 6,
    title: "Training Angular",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "finished",
    blockReason: "",
    priority: 1,
  }
];

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
    for(let task of taskList) {
        addTask(task);
    }
    showForm();




}

function addTask(task){
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.classList.add(task.state);
    let taskTitle = document.createElement("p");
    taskTitle.innerHTML = task.title;
    let taskDescription = document.createElement("p");
    taskDescription.innerHTML = task.description;
    let taskAssignees = document.createElement("p");
    taskAssignees.innerHTML = task.assignees.join(", ");
    taskDiv.append(taskTitle, taskDescription, taskAssignees);
    let pileDiv = document.getElementById(task.state);
    pileDiv.append(taskDiv);

}

function showForm() {
    let formContainer = document.getElementById("form-container");
    let titleInput = document.createElement("input");
    titleInput.setAttribute("id", "form-title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("value", "Title");
    titleInput.classList.add("form-input");
    formContainer.appendChild(titleInput);

    let descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("id", "form-description");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("value", "Description");  
    descriptionInput.classList.add("form-input");
    formContainer.appendChild(descriptionInput);

    let assigneesInput = document.createElement("input");
    assigneesInput.setAttribute("id", "form-assignees");
    assigneesInput.setAttribute("type", "text");
    assigneesInput.setAttribute("value", "Assignee");
    assigneesInput.classList.add("form-input");
    formContainer.appendChild(assigneesInput);

    let addButton = document.createElement("button");
    addButton.innerHTML = "Add";
    addButton.setAttribute("type", "submit");
    addButton.setAttribute("id", "add-btn");
    formContainer.appendChild(addButton);


    
}





{/* <div id="task-form-container">
<input type="text" id="task-title" value="Title">
<input type=" text" id="task-description" value="Description">  
<input type="text" id="task-assignees" value="Assignee">
<button type="submit">Add</button>
</div> */}


{/* <div id="not_started">
<div class="task not_started">
    <p>Title: task.title</p>
    <p>Description: task.description</p>
    <p>Assignees: task.assignees[0]</p>
</div>
</div> */}