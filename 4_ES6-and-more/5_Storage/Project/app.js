/*
__________REFACTOR
Refactor the code done for "JS-COURSE/2_DOM-Manipulation/2_events/Project"
refactor the code so it has ES6 Classes and uses the local storage class
*/


class Todo {
    constructor(title, description, id) {
        this.title = title;
        this.description = description;
        this.id = id;
    }
}
  
class UI {
    static addTodoToList(todo) {
        const list = document.getElementById("todo-list");
        const row = document.createElement("tr");
        row.classList.add("row", "m-0");

        row.innerHTML = `
            <td class="col-1">${todo.id}</td>
            <td class="col-5">${todo.title}</td>
            <td class="col-5">${todo.description}</td>
            <td class="col-1 btn btn-danger text-decoration-none text-centered" id="x">X</td>
        `;
        list.appendChild(row);
    }

    static showAlert(message, className) {
        const boxMessage = document.createElement("div");
        boxMessage.className = `text-white alert-message text-center ${className}`;
        boxMessage.appendChild(document.createTextNode(message));

        const container = document.querySelector(".container");
        const form = document.getElementById("form");
        container.insertBefore(boxMessage, form);

        setTimeout(() => boxMessage.remove(), 2000);
    }

    static deletetodo(target) {
        if(target.id === "x") {
            target.parentElement.remove();
        }
    }

    static clearFields() {
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    }
}
  
class Storage {
    static getTodos() {
        return localStorage.getItem("todos") === null ?
            []
        : 
            JSON.parse(localStorage.getItem("todos"))
        ;
    }

    static displayTodos() {
        const todos = Storage.getTodos();
        todos.forEach(todo => UI.addTodoToList(todo));
    }

    static addTodo(todo) {
        const todos = Storage.getTodos();
        todos.push(todo);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    static removeTodo(id) {
        id = Number.parseInt(id);
        const todos = Storage.getTodos();
        todos.forEach((todo, index) => {
            if(todo.id === id) {
                todos.splice(index, 1);
            }
        });
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

// APP
document.addEventListener("DOMContentLoaded", Storage.displayTodos);
  
document.getElementById("form").addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    const todos = Storage.getTodos();
    const id = todos.length > 0 ? todos[todos.length-1].id+1 : 0;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const todo = new Todo(title, description, id);

    if(title==="" || description==="") {
        UI.showAlert("Please fill up the form", "bg-danger");
    } else {
        UI.addTodoToList(todo);
        Storage.addTodo(todo);
        UI.showAlert("To Do Added :D", "bg-success");
        UI.clearFields();
    }
});
  
document.getElementById("todo-list").addEventListener("click", (evt) => {
    if (evt.target.textContent !== "X") return;
    UI.deletetodo(evt.target);
    Storage.removeTodo(evt.target.parentElement.firstElementChild.textContent);
    UI.showAlert("To Do removed", "bg-success");
});