// Selecting elements
var body = document.body;
var child = document.querySelector('.child');
console.log(body, child);

// Changing properties
body.innerText = 'Hi';
child.textContent = 'World';
child.id = 'son';
child.style.backgroundColor = 'orange';

// (check out the readme.md to know more about textContent and innerText)

// Appending to body
body.appendChild(child);
body.append('.append() allows you to add text, when .appendChild() does not.');

// Removing an element
child.remove();
body.removeChild(child);

// Manipulating Class
body.classList.add('some-class','container');
body.classList.contains('some-class'); // true
body.classList.replace('some-class', 'btn');
body.classList.remove('btn','container');
body.classList.toggle('dark-mode', true);

// Manipulating attributes
var parent = document.querySelector('.parent');
parent.setAttribute('id', 'myChildID');
parent.id = 'uniqueID';
parent.getAttribute('id');
parent.id;
parent.removeAttribute('id');

// Manipulating data-attributes (custom attributes)
// <footer data-custom-data="myCustom data is here!"> my footer </footer>
var footer = document.querySelector('footer');
console.log(footer.dataset.customData); // myCustom data is here!
footer.dataset.newValue = 'another data';
delete footer.dataset.newValue;