# Functional Programming
At the begining of programming, started as imperative programming. Eventually evolved because more and more programmers build up useful tools, meaning that you don't need to re-do what's already created, no need to re-discover the wheel.

What Functional Programming does on its more abstract level is to allows you to write less code by providing data as a result of using functions.

> **With Functional Programming you place some input data and get some output data**

#### Not all the programming languages supports Functional. JS does it!
For this example, we'll have an array of objects literals and we will get the objects that `canSwim`.

```javascript
// get all the objects that canSwim == true
var objects = [
	{name: 'Bob', canSwin: true},
	{name: 'Anderson', canSwin: false},
	{name: 'Ed', canSwin: false},
	{name: 'Natasha', canSwin: false},
	{name: 'Daniel', canSwin: true},
	{name: 'John', canSwin: false},
	{name: 'Mary', canSwin: true}
];

// using the imperative approach:
var canSwimObjs = [];
for (var obj of objects) {
	if (obj.canSwin)
		canSwimObjs.push(obj);
}
console.log(canSwimObjs);

// using functional approach
console.log(objects.filter(obj => obj.canSwin));
```

## Core Concept
How you treat information, should be 100% divided between the whole app data and the function's data. Functional Programming is about creating independency and pure functions that never affects the functionality of the app.

```javascript
// non-functional function
var score = 100;

function addPoints() {
	return score + 25;
}

// functional function
function addPts(score) {
	return score + 25;
}
```

### Pure Functions
* Do not causes any side effects in the app
* Whenever you call the function with the same input should always return the same output

```javascript
// pure function example
function sum(a, b) {
	return a + b;
}
```

## 'Weird' things that this paradigm allows you to do
```javascript
// assign to a var a function
function rest(a, b) {
	return a - b;
}
var val = rest(4, 1);

// receive functions as a parameter (callback)
function someLogic(num, myCallback) {
	var n = num + 10;
	myCallback(n);
}
someLogic(4, function(x) {
	console.log(x); // 14
});

// return functions (closures)
function closure() {
	var country = 'Colombia';
	function showCountry() {
		alert(country);
	}
	return showCountry;
}
var myNewFunction = closure();
myNewFunction();
```