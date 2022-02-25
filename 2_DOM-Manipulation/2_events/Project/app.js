/*
Create a TODO list app that can save the id, title and description of the item in an array and a UI table
must have a delete button for each item.

Form validation is required and the use of a css framework like bootstrap.
*/

var todoList = [];
var ids = idGenerator();

// Adding the events to the form and the delete btn
document.getElementById("form").addEventListener("submit", (evt) => {
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var newToDo = createToDo(title, description);

    if(title==="" || description==="") {
        showAlert("Please fill up the form", "bg-danger");
    } else {
        addToDo(newToDo);
        showAlert("To Do Added", "bg-success");
        clearFields();
    }

    evt.preventDefault();
});

document.getElementById("todo-list").addEventListener("click", (evt) => {
    if (removeToDo(evt.target)) {
        showAlert("To Do removed", "bg-success");
    } else {
        return;
    }
});


// Main Functions
function addToDo(todo) {
    var list = document.getElementById("todo-list");
    var row = document.createElement("tr");
    row.classList.add("row", "m-0");

    row.innerHTML = `
        <td class="col-1">${todo.id}</td>
        <td class="col-5">${todo.title}</td>
        <td class="col-5">${todo.description}</td>
        <td class="col-1 btn btn-danger text-decoration-none text-centered" id="x">X</td>
    `;
    list.appendChild(row);
    todoList.push(todo);
}

function removeToDo(target) {
    if(target.id === "x") {
        target.parentElement.remove();
        return true;
    } else {
        return false;
    }
}

function createToDo(title, description) {
    return {
        id: ids.next().value,
        title: title,
        description: description
    }
}


// Helper functions
function clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function showAlert(message, className) {
    var boxMessage = document.createElement("div");
    boxMessage.className = `text-white alert-message text-center ${className}`;
    boxMessage.appendChild(document.createTextNode(message));

    var container = document.querySelector(".container");
    var form = document.getElementById("form");
    container.insertBefore(boxMessage, form);

    setTimeout(() => boxMessage.remove(), 3000);
}

function* idGenerator() {
	var id = 1;
	while (true) {
		yield id++;
    }
}