/*
In Object Oriented Programming we got properties and methods, looks like this:
	* Object.property;
	* Object.method(args);

That's a typing style that we've seen many times, for example:
*/
var s = 'Hi World !';
console.log(s.length); // 10
console.log(s.toUpperCase()); // HI WORLD !

// I'm going to create the object literal 'movie1' with three properties and one method:

var movie1 = {
	title: 'Inception',
	director: 'Christopher Nolan',
	year: '2012',
	printSummary: function() {
		console.log(`The movie ${this.title} directed by ${this.director} was released on ${this.year}.`);
	}
};

// now I can directly use the movie1 method called 'printSummary'

movie1.printSummary();

/*
What if I want another book?
Oh no! so I should re do it?
well, with this approach, yes!
*/

var movie2 = {
	title: 'Apocalypto',
	director: 'Mel Gibson',
	year: '2008',
	printSummary: function() {
		console.log(`The movie ${this.title} directed by ${this.director} was released on ${this.year}.`);
	}
};

/*
In this situation is when comes handy to have a template that we can use to create or
instantiate more objects, that's the core of OOP
Re-doing prior code with a OOP aproach, will look like this:
*/

function Movie(title, director, year) {
	this.title = title;
	this.director = director;
	this.year = year;

	this.printSummary = function() {
		console.log(`The movie ${this.title} directed by ${this.director} was released on ${this.year}.`);
	}
}

// now to use it I need a brand new object based on that Movie template:

var growUps = new Movie('Grow Ups', 'Adam Sandler', '2013');
growUps.printSummary();