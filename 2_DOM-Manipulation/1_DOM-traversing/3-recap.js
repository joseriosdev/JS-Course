// Let's recap with CRUD concepts. This is what you can do to DOM elements:

// Create
var div = document.createElement('div');

// Read
var grandParent = document.querySelector('#grandParent');
var lastChild = grandParent.lastElementChild;

// Update
div.classList.add('parent');
div.innerText = 'Created Div';

lastChild.innerHTML = '<b style="color:red"> Some Text </b>';

grandParent.textContent = 'Hello World';
grandParent.appendChild(div);
grandParent.appendChild(lastChild);

// Delete
div.remove();