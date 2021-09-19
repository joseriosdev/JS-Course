// <<<<<<< Arrays >>>>>>>>
// Basic declaration, accessing through index and the length property
var myStrArray = ['Dogs','Are','Cool'];
var emptyArray1 = [];
var emptyArray2 = new Array();

console.log(myStrArray);
console.log(myStrArray[1]);
console.log(myStrArray.length);

// Hence, if .length is a number, what would happen if I access that index in my Array?
console.log(myStrArray[myStrArray.length]);

// Arrays in Js are DYNAMIC
// Use the .length to add a value
myStrArray[myStrArray.length] = 'Than Cats';
console.log(myStrArray);

// Use 4 array methods to change the array value
myStrArray.pop(); // delete last
console.log(myStrArray);
myStrArray.push('I\'m last'); // add last
console.log(myStrArray);

myStrArray.shift(); // delete first
console.log(myStrArray);
myStrArray.unshift('I\' first'); // add first
console.log(myStrArray);

// Arrays can have any data type
var arr = [null, true, false, 5, 2.33, undefined, 'Text'];
console.log(arr);


// <<<<<<< Literal Objects >>>>>>>>
// Declaration is based in KEY-VALUE pair
var emptyObject1 = {};
var emptyObject2 = new Object();

var myObj = {
	name: 'Jose',
	age: 24,
	developer: true
};
console.log(myObj);

// Can also be like a JSON format
myObj = {
	'name': 'Jose',
	'age': 24,
	'developer': true
};
console.log(myObj);

// Access the key any of these 2 ways
console.log(myObj.name);
console.log(myObj['age']);
console.log(myObj.developer);

// Objects don't have the .length property BUT you can still access the value .length property if is a String or Array
console.log(myObj.length); //undefined
console.log(myObj.name.length); // 4 -> [J, o, s, e]

// Check if a value exist with .hasOwnProperty
console.log(myObj.hasOwnProperty('name')) // true
console.log(myObj.hasOwnProperty('lastName')) // false

// Create new properties(key) to the Object
myObj.lastName = 'Rios';
console.log(myObj.hasOwnProperty('lastName')) // true

// Delete a key
console.log(myObj);
delete myObj.lastName;
console.log(myObj);