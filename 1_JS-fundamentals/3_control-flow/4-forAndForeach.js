/*
for loops are similar to have a function with the name "for" that receives 3 parameters
1. variable declaration (usually named i meaning index)
2. logical statement condition that starts been true and eventually will be false
3. increment that will denote the end of the for (i++)

Let's have a look with a code sample
*/

for(var count = 1; count <= 10; count++) { // notice the "<="
	console.log('Count = ' + count); // 10 console logs will apear
}

// "For" is usually used with Arrays, recall...
var arr = [9,'some text',false,true,null,{objKey: 'key value'}];

console.log(arr[0]); // 9 -> first element in the array
console.log(arr.length); // 6 -> the number that represents the amount of elements in the array

for(var index = 0; index < arr.length; index++) { // notice the "<"
	console.log(index); // prints numbers from 0 to 5
	console.log(arr[index]); // prints all the elements in the array
}

// We have a similar other "for" options, let's have a look to "for in"
// below code does the same above
for(var index in arr) {
	console.log('index: ' + index);
	console.log('Array Element: ' + arr[index]);
}




// We also have the option to take the element itself
// Using "for of"
for(var element of arr) {
	console.log(element); // prints the element in the array
}

// There is a similar approach with an Array method called "forEach"
// Since is a method (function), it will take some arguments or parameters
	// the element just like "for of" and the index, like "for in"
	// full info -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// this method is buld-in with JS
// also, because is a function, it means that can be written in three (3) ways as we've since before

// regular anonymus function
arr.forEach(function(element, index) {
	console.log(element);
	console.log(index);
});

// arrow function
arr.forEach((element, index) => {
	console.log(element);
	console.log(index);
});

// declaring a function variable and then assigning it
var forEachFunction = function(element, index) {
	console.log(element);
	console.log(index);
}
arr.forEach(forEachFunction);




/// ------------ LOOPING THROUGH OBJECT LITERAL
/*
Notice that we can easily have access to array elements thanks to its index
but, what about an object literal
doesn't have an index, you can't have something like "obj.length"
well, let's re-explore the 'for in' but with object literals
*/
var obj = {
	key: 'Hey',
	anotherKey: 'Ho'
};

for(var key in obj) {
	console.log(key); // prints the key
	console.log(obj[key]); // prints the value from the key
}


// ----------------- EXERCISE
/*
you got next array [1,4,9,2,4,1,0,4,8]
using any for, do a program than can sum all the numbers of the given array
*/

var arr = [1,4,9,2,4,1,0,4,8];
var result = 0;
for (var i = 0; i < arr.length; i++) {
	result += arr[i];
}
console.log(result);