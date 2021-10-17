/*
THE APP
- Should have the next functions:
	1- Sum-division-multiplication-rest of 2 given numbers return an Object
	2- Generate a random number within given Range
	3- With a given decimal, should return an obj with floor, round and ceil (fixed to 2)
	4- A function that prints the area of a circle with the respective params
	5- Function that without parameters, does a document write, a console log and an alert of a random text (all 3 prints should have different texts)
	6- Miles to KM converter
	7- Countdown, user can provide the amount of seconds, if user put 5, then, should console log 5,4,3,2,1,0,-1,-2,... every sec
	8- Functions that takes an any array, removes the last element and then, adds a new last element as null
	9- Knowing the speed(km/h) and total trip distance(km), should say the amount of hours taken to complete the trip (fixed to 1)

You should test all the functions in the browser
Create an app that uses one of the prev functions taking the params from user input (prompt)
*/

// #1
function aritmeticOperations(a, b) {
	return {
		sum: a + b,
		rest: a - b,
		multiplication: a * b,
		division: a / b
	}
}

// #2
var randomInRange = function(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

// #3
var getBasicMathsMethods = decimalNumber => {
	return {
		ceil: parseFloat( Math.ceil(decimalNumber).toFixed(2) ),
		floor: parseFloat( Math.floor(decimalNumber).toFixed(2) ),
		round: parseFloat( Math.round(decimalNumber).toFixed(2) )
	}
}

// #4
function circleArea(radius) {
	console.log(`The area of the circle with radius ${radius} is: ${(2 * Math.PI * radius).toFixed(2)}`);
}

// #5
var printRandomTexts = function() {
	var randomTextsList = [
		'Olá',
		'Hola',
		'Hello',
		'Hallo',
		'Ciao',
		'Salut',
		'Привет',
		'こんにちは',
		'你好呀',
		'안녕하세요'
	]
	var getRandomText1 = randomTextsList[randomInRange(0, randomTextsList.length-1)];
	var getRandomText2 = randomTextsList[randomInRange(0, randomTextsList.length-1)];
	var getRandomText3 = randomTextsList[randomInRange(0, randomTextsList.length-1)];

	console.log(getRandomText1);
	alert(getRandomText2);
	document.write(getRandomText3);
}

// #6
var milesToKM = miles => {
	var km = (miles * 1.6).toFixed(2);
	console.log(`The miles ${miles} to KM will be ${km}`);
	return km;
}

// #7
function countdown(initialNumber) {
	setInterval(() => {
		console.log(initialNumber--);
	}, 1000);
}

// #8
var lastIsNull = function(arr) {
	arr.pop();
	arr.push(null);
	return arr;
}

// #9
var tripHoursCalculator = (speed, distance) => (distance / speed).toFixed(1);


// Here's the actual app
alert('RANDOM NUMBER BETWEEN RANGE!');

var min = parseInt(prompt('Min value please'));
var max = parseInt(prompt('Max value please'));
var pick = randomInRange(min, max);

alert('This is my pick => ' + pick);