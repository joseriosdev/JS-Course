/*
Array methods are very common, here, we'll explore 5 of them, however we did that already
we have been using things like
.forEach()
.push()
.pop()
...those are array methods, the ones that we'll see here are High Order methods
see the whole list here ->
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

1- MAP
Creates a new array populated with the results of calling a provided function on every element in the calling array.
*/
var arr = [1,2,3,4,5];
var arrMap = arr.map(function(i) {
	return i + 10; // this anonymous function can be replaced by arrow function
});
console.log(arrMap); // 11, 12, 13, 14, 15

/*
2- FILTER
Creates a new array with all elements that pass the test implemented by the provided function
*/
var arrFilter = arr.filter(num => num > 3);
console.log(arrFilter); // 4, 5

/*
3- SOME
Tests whether at least one element in the array passes the test implemented by the provided function
*/
console.log(arr.some(i => i === 5)); // true
console.log(arr.some(i => i === 8)); // false

/*
4- FIND
Returns the value of the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned
*/
console.log(arr.find(i => i === 5)); // 5
console.log(arr.find(i => i === 8)); // undefined

/*
5- SLICE
Returns a shallow copy of a portion of an array into a new array object selected from start to end
(end not included) where start and end represent the index of items in that array. The original array will not be modified
*/
console.log(arr.slice(2)); // 3, 4, 5
console.log(arr.slice(1, 2)); // 2

/*
YOU CAN COMBINE THEM:
it executes from left to right, just like reading!
*/
console.log(arr.map(n => n * 10 + 5).filter(n => n > 20 && n < 40)); // 25, 35
