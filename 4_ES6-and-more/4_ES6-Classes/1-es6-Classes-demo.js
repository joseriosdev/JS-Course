/*
Check file '../3_Paradigms/3_OOP/ObjectOrientedProgramming.md' where is summarized OOP, here's only a brief demostration
along with the project for pratice
*/

// Creating the class Person with the method greeting

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greeting() {
		const msg = `Hello! My name is ${this.name} and I'm ${this.age} years young.`;
		console.log(msg);
		return msg;
	}
}

const jim = new Person('Jim', 22);
jim.greeting(); // works well
console.log(jim)

/* BUT...
Person.greeting(); // Error: Person.greeting is not a function
use the static keyword to turn the method static, so can be called with the class itself

Best example to understand this is creating our own class Maths
*/

class Maths {
	static sum(a, b) {
		return a + b;
	}
}

console.log(Maths.sum(5,6)); // 11

// Inheriting

class Employer extends Person {
	constructor(name, age, company) {
		super(name, age);
		this.company = company;
	}

	greeting() {
		super.greeting();
		console.log('and I work for ' + this.company);
	}
}

const e = new Employer('Bob', 40, 'Securities');
e.greeting();