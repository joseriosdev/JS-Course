/*
Create a pattern that allows to create  employees with different types like (dev, tester, ui/ux)
and each one of them shares the same method 'greeting' and the same company

properties: name, client, company, position
methods: greeting, working
*/

// Concrete classes
function Employee(name, client) {
    this.company = 'Google';
    this.position = undefined;
    this.client = client;
    this.name = name;
}

// Behaviors (can also be overriden)
Employee.prototype.greeting = function() {
    console.log(`I'm ${this.name}, I work for ${this.company}`);
}
Employee.prototype.working = function() {
    console.log(`My currently client is ${this.client} as a ${this.position}`);
}

class Dev extends Employee {
    constructor(name, client) {
        super(name, client);
        this.position = 'Developer';
    }

    working() {
        console.log('I cannot said who my client is.');
    }
}

class Tester extends Employee {
    constructor(name, client) {
        super(name, client);
        this.position = 'Tester';
    }
}

class UX_UI extends Employee {
    constructor(name, client) {
        super(name, client);
        this.position = 'UX/UI Designer';
    }

    working() {
        super.working();
        console.log('And I love my job!');
    }
}

// Factory Pattern
class Factory {
    static create(name, client, type) {
        switch(type) {
            case 0:
                return new Dev(name, client);
            case 1:
                return new Tester(name, client);
            case 2:
                return new UX_UI(name, client);
            default:
                throw new Error('Unexisting Employee type');
        }
    }
}

const employees = [
    new Dev('Brad Traversy', 'Traversy Media'),
    new Tester('David Arcila', 'SENA'),
    new UX_UI('Diego Espitia', 'Unreal'),
    new Dev('Alva Majo', 'Majotori')
];

for (let emp of employees) {
    emp.greeting();
    emp.working();
}
