/*
using bootstrap...
Create an app with a button that creates 10 random students with this information:

	* id
	* name
	* age
	* is active status?

* all students info should be displayed on screen (could be cards)
* have a filter button where shows all active students
* another button revert previouse filter (show all students)
* a button than changes all status to active

remember, you can use arrays and Math.random
use generators for the id creation
use .map .filter high order array methods
*/

var generateBtn = document.getElementById('generate');
var showActiveBtn = document.getElementById('showActive');
var showAllBtn = document.getElementById('showAll');
var changeToActiveBtn = document.getElementById('changeToActive');
var outputStudents = document.getElementById('outputStudents');
var ids = idGenerator();
var students = [];


generateBtn.addEventListener('click', createRandomStudents);
showAllBtn.addEventListener('click', showAllStudents);
changeToActiveBtn.addEventListener('click', changeToActive);
showActiveBtn.addEventListener('click', showActiveStudents);

function createRandomStudents() {
	var names = ['Bob','Brad','Ed','Eve','Carly','Travis','Dakota','Sam','Liza','Cindy'];
	var ages = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

	for (var i = 0; i < 10; i++) {
		var newStudent = {
			id: ids.next().value,
			name: names[randomNum(0, names.length)],
			age: ages[randomNum(0, ages.length)],
			status: i % 2 === 1 ? true : false
		}
		students.push(newStudent);
	}
	updateUI(students);
}

function showAllStudents() {
	if (students.length > 0)
		updateUI(students);
	else
		alert('No students yet');
}

function showActiveStudents() {
	if (students.length === 0)
		return alert('No students yet');

	var activeStudents = students.filter(student => student.status);
	updateUI(activeStudents);
}

function changeToActive() {
	if (students.length === 0)
		return alert('No students yet');

	students = students.map(student => {
		var obj = {...student};
		obj.status = true;
		return obj;
	});
	updateUI(students);
}


// utils
function* idGenerator() {
	var id = 1;
	while (true)
		yield id++;
}

function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function updateUI(studentsList) {
	var output = '';

	for (var student of studentsList) {
		output += `
		<ul class="col-3 p-5 rounded shadow">
			<li><b>Id:</b> ${student.id}</li>
			<li><b>Name:</b> ${student.name}</li>
			<li><b>Age:</b> ${student.age}</li>
			<li><b>Active:</b> ${student.status}</li>
		</ul>`;
	}

	outputStudents.innerHTML = output;
}