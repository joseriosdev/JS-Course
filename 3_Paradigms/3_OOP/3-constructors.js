/*
A constructor is the initial data needed to create an object
on your object you receive an input that will transform into object properties
*/

function Movie(inputMovieTitle) {
	this.title = inputMovieTitle;
}

var myMovie = new Movie('My Movie.');
console.log(myMovie.title);

/*
constructors are executed once a new instance is created
*/

function Film() {
	console.log('Initial Film Creation...');
}

var brave = new Film(); // prints: 'Initial Film Creation...'

// So you can have any logic you want when creating an object

function Person(fn, ln, age, genre) {
	this.firstName = fn;
	this.lastName = ln;
	this.age = Number.parseInt(age);
	this.genre = genre;
	this.isAdult = this.age > 21 ? true : false;
	this.fullName = this.firstName + ' ' + this.lastName;
	this.nickname = `@${this.firstName}${this.lastName}${this.age * 2}`;

	(function(fn, age, adult, nick) {
		var output = `
			The person ${fn} has been created.
			Has an age of ${age} meaning, his madurity is ${adult}.
			Was assigned the nickname of ${nick}.
		`;
		console.log(output);
	})(this.fullName, this.age, this.isAdult, this.nickname)
}

var bob = new Person('Bob', 'Sullivan', 25, 'male');

/*
Quick mention about 'Constructor Overload' that is something that JavaScript doesn't support.
Other languages like C# has it and is basically the option of haven multiple contructors for one object.

for example the object car can be instantiated with only [name] or [name, year] or [name, year, brand]
in that example, you might have 3 constructors in one single object.
*/