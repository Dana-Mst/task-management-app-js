let taskList = [
  {
    id: "1",
    title: "Training Ajax",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "not_started",
    blockReason: "",
    priority: 1,
  },
  {
    id: "5",
    title: "Training Java ",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "not_started",
    blockReason: "",
    priority: 1,
  },
  {
    id: "3",
    title: "Training Python",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "not_started",
    blockReason: "",
    priority: 1,
  },
  {
    id: "12",
    title: "Training JS",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "progress",
    blockReason: "",
    priority: 1,
  },
  {
    id: "7",
    title: "Training React",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "blocked",
    blockReason: "requirements",
    priority: 1,
  },
  {
    id: "6",
    title: "Training Angular",
    description: "Learn how to use Ajax to send data to the server",
    assignees: ["Ioana", "Maria", "Sebastian"],
    state: "finished",
    blockReason: "",
    priority: 1,
  },
];

let assignees = ["Ioana", "Maria", "Sebastian", "Julian", "Uhtred"];

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  for (let task of taskList) {
    addTask(task);
  }
  showForm();

  let inputFields = document.getElementsByClassName("form-input");
  for (let inputField of inputFields) {
    inputField.addEventListener("onFocus", clearInputValue);
  }
  let addTaskForm = document.getElementById("form-container");
  addTaskForm.addEventListener("submit", onFormSubmit);

  let pileDiv = document.getElementsByClassName("pile-div");
  for (let pile of pileDiv) {
    pile.addEventListener("dragover", allowDropTask);
    pile.addEventListener("drop", dropTask);
  }
}

function addTask(task) {
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.setAttribute("draggable", "true");
  taskDiv.setAttribute("id", task.id);
  taskDiv.addEventListener("dragstart", dragTask);

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
  titleInput.setAttribute("placeholder", "Title");
  titleInput.classList.add("form-input");
  formContainer.appendChild(titleInput);

  let descriptionInput = document.createElement("input");
  descriptionInput.setAttribute("id", "form-description");
  descriptionInput.setAttribute("type", "text");
  descriptionInput.setAttribute("placeholder", "Description");
  descriptionInput.classList.add("form-input");
  formContainer.appendChild(descriptionInput);

  let assigneesSelect = document.createElement("select");
  assigneesSelect.setAttribute("id", "form-assignees");
  assigneesSelect.setAttribute("placeholder", "Assignee");
  assigneesSelect.setAttribute("multiple", true);
  formContainer.appendChild(assigneesSelect);
  for (let assignee of assignees) {
    let option = document.createElement("option");
    option.value = assignee;
    option.innerHTML = assignee;
    assigneesSelect.appendChild(option);
  }

  let addButton = document.createElement("button");
  addButton.innerHTML = "Add";
  addButton.setAttribute("type", "submit");
  addButton.setAttribute("id", "add-btn");
  formContainer.appendChild(addButton);
}

function onFormSubmit(event) {
  event.preventDefault();
  let title = document.getElementById("form-title").value;
  let description = document.getElementById("form-description").value;
  let assignees = document.getElementById("form-assignees").options;
  let selectedAssignees = [];
  for (let assignee of assignees) {
    if (assignee.selected === true) {
      selectedAssignees.push(assignee.value);
    }
  }
  let task = {
    id: makeid(10),
    title: title,
    description: description,
    assignees: selectedAssignees,
    state: "not_started",
    blockReason: "",
    priority: 1,
  };

  addTask(task);
  taskList.push(task);
  let inputFields = document.getElementsByClassName("form-input");
  for (let inputField of inputFields) {
    inputField.value = "";
  }
}

function dragTask(event) {
  event.dataTransfer.setData("task-id", event.target.id);
  event.dataTransfer.setData("task-state", event.target.parentNode.id);
}

function allowDropTask(event) {
  event.preventDefault();
}

function dropTask(event) {
  event.preventDefault();
  let taskId = event.dataTransfer.getData("task-id");
  let taskDiv = document.getElementById(taskId);
  let taskState = event.dataTransfer.getData("task-state");
  let pileDiv = event.currentTarget;

  taskDiv.classList.remove(taskState);
  taskDiv.classList.add(pileDiv.id);

  for (let task of taskList) {
    if (task.id === taskId) {
      task.state = pileDiv.id;
    }
  }

  pileDiv.appendChild(taskDiv);
}

function clearInputValue(event) {
  event.target.value = "";
}

function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

