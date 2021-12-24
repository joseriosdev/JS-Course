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
...
until FINALLY
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
that disrupts the normal flow of the program's instructions, when that happens you can 
THROW an Exception meaning a custom error message
*/
throw 'Error2';   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };

// Or you can have your own object exception, here's the example but later we get to see Objects in detail
function PersonException(msn) {
	this.message = msn;
	this.name = 'Person Name';
	this.anyOtherProperty = true;
}
throw new PersonException('Not legal');

// Example of an error handling when someone wants to use a month number outside range (1-12)
function getMonthName(num) {
	var month = num - 1;
	var months = [
		'January', 'February', 'March',
		'April', 'May', 'June',
		'July', 'Agust', 'September',
		'October', 'November', 'December'
	];

	try {
		if (month > 0 && month < 13)
			console.log(months[month]);
		else
			throw 'Outside month range (1-12)'
	} catch(err) {
		console.log(err);
	} finally {
		console.log('work finished!');
	}
}