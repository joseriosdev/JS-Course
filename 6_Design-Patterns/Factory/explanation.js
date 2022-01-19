/*
* Is a Creational pattern

Factory method is a creational design pattern which solves the problem of
creating product objects without specifying their concrete classes.

Factory Method defines a method, which should be used for creating objects instead of
direct constructor call (new operator). Subclasses can override this method to change the class of objects that will be created.

So, we're dividing the concrete class from the behavior.

Since allows to create objects, there are another approach to that, we got Abstract Factory and Factory Method.
The main difference between a “factory method” and an “abstract factory” is that the factory method is a single method, and an abstract factory is an object. 

Let's see two examples...
*/

// Common case, when testing, you may need to have a class that provides objects for testing:

class Product {
    constructor(label, price, id) {
        this.label = label;
        this.price = price;
        this.id = id;
    }
}

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

class Bill {
    constructor(user, products) {
        this.user = user;
        this.products = products;
    }
}

class FactoryTester {
    static createProducts() {
        return {
            one: [new Product('Product Label 1', 10, 0)],
            many: [new Product('Product Label 2', 20, 5), new Product('Product Label 3', 30, 6), new Product('Product Label 4', 40, 7)]
        }
    }

    static createUser() {
        return new User('Jon Doe', 11);
    }
}

// Supouse that here is my testing code...
const testUser = FactoryTester.createUser();
const testProducts = FactoryTester.createProducts();
const testBill = new Bill(testUser, testProducts.many); // length of 3
console.assert(testBill.products.length === 1, {data: testBill.products.length, errorMsg: 'Is not equal to 1'});


// Another way of using this pattern is:
function Member(name) {
    this.name = name;
    this.type = 'Regular';
}

function VIPMember(name) {
    this.name = name;
    this.type = 'VIP';
}

class MemberFactory {
    static create(name, type) {
        switch(type) {
        case 1:
            return new Member(name);
        case 2:
            return new VIPMember(name);
        }
    }
}   

function greeting() {
    console.log(`Hi! My name is ${this.name} and I'm a ${this.type} member.`);
}

const members = []

members.push(MemberFactory.create('Jon Doe', 2))
members.push(MemberFactory.create('Janice Allen', 2))
members.push(MemberFactory.create('Jane Gates', 1))
members.push(MemberFactory.create('Joseph Rivers', 1))
members.push(MemberFactory.create('Justin Willis', 2))

members.forEach( m => greeting.call(m) );