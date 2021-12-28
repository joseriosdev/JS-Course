/*
Do an app that takes either map or set input and displays it in the screen

for example:
- as user I want to select which type of data I'll be entering [map || set]
- my screen should display two cols, one for map, another for set
- when displaying the info, sets should be an unordered list
- maps should be ordered list with value: key output
- use bootstrap
- cannot insert empty inputs
- remember to use let, const and destructuring
*/

const toggle = document.getElementById('toggle');
const inputKey = document.getElementById('key');
const inputValue = document.getElementById('value');
const inputSetValue = document.getElementById('setValue');
const setForm = document.getElementById('setForm');
const mapForm = document.getElementById('mapForm');

let mySet = new Set();
let myMap = new Map();

toggle.addEventListener('change', () => {
	if (toggle.checked) {
		inputValue.disabled = false;
		inputKey.disabled = false;
		inputSetValue.disabled = true;
	} else {
		inputValue.disabled = true;
		inputKey.disabled = true;
		inputSetValue.disabled = false;
	}
});

setForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	
	if(checkInputs(inputSetValue.value)) {
		let output = '';

		mySet.add(inputSetValue.value);
		mySet.forEach(item => {
			output += '<li>' +item+ '</li>'
		});
		document.getElementById('setOutput').innerHTML = output;
		inputSetValue.value = '';
	}
});

mapForm.addEventListener('submit', (evt) => {
	evt.preventDefault();

	if (checkInputs(inputValue.value, inputKey.value)) {
		let output = '';
		myMap.set(inputKey.value, inputValue.value);

		for (let [key, val] of myMap) {
			output += `<li>${key} : ${val}</li>`;
		}
		document.getElementById('mapOutput').innerHTML = output;

		inputKey.value = '';
		inputValue.value = '';
	}

});

function checkInputs(...inputs) {
	for (let input of inputs) {
		if (input === '') {
			alert('Please, do not put empty inputs');
			return false;
		}
	}
	return true;
}