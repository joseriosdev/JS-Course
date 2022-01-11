/*
Alright alright, you've seen the 'this' keyword, but what is it?

'this' makes reference to the current object, for example:
*/

console.log(window);

// 'window' is a global object that already exists, actually, you can:
window.alert('Hello World');

// because is global, born with JS, you can also say:
alert('Hola Mundo');

// or also refers it as 'this'
console.log(this);

// Let's redo the prev example:

var movie1 = {
	title: 'Tarzan',
	alternativeTitle: function() {
		return this.title + ' is an alternative';
	}
};

var movie2 = {
	title: 'Mulan',
	alternativeTitle: function() {
		return this.title + ' is an alternative';
	}
};

console.log(movie1.alternativeTitle());
console.log(movie2.alternativeTitle());

// Notice how it the 'this' reference changes. Using OOP...

function Movie(t) {
	this.title = t;
	this.alternativeTitle = function() {
	 	return this.title + ' is an alternative';
	}
}

var pinoccio = new Movie('Pinoccio');
console.log(pinoccio.alternativeTitle());