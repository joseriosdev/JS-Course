// Error Handling
/*
Errors and bugs will be part of a developers job, we need to handle them.
Let's first have a look to an error in the console:
	* you want to console.log an unexisting variable
*/
console.log(someVaribleName); // you'll get an error in the console

/*
How can it be handled?
Usign IF and ELSE is a really good idea
*/
if(someVaribleName) {
	console.log(someVaribleName);
} else {
	console.log('Variable is empty');
}
// But this still getting crashed...
// should be a better way
// yep, you can use "try" and "catch", for example:
try {
	console.log(someVaribleName);
} catch {
	console.log('Variable is empty');
}

/*
try is saying, hey! app, please try to do the following code block
but
if it fails
catch that and do next block of code
*/

/*
Just want to mention that things like if, else, if else, switch, all of them can be used for error handling
but 
*/


/*
This is a concept that refers to the use of
	- try
	- catch
	- finally
	- throw
	- exceptions
Those are tools generally used for handling errors and avoid the total crash of the app
*/

// Exception
/*
Is an event which occurs during the execution of a program,
that disrupts the normal flow of the program's instructions
*/

// Let's see an example.
// let's say that you want to console.log an unexisting variable

// so, let's 