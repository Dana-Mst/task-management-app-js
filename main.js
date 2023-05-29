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

{/* <div id="not_started">
<div class="task not_started">
    <p>Title: task.title</p>
    <p>Description: task.description</p>
    <p>Assignees: task.assignees[0]</p>
</div>
</div> */}