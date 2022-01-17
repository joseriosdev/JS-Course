> The code samples here are typed with the newer version of JS called ES6, but all the code found in the other folders are the old version of JS ES5 and shows how JS works underneath, that's why might look a bit weird, classes are easier to understand, that's why this section has it

# What is OOP?
Is the short for Object Oriented Programming, which is a programming paradigm created in the lates '90. What OOP does is to allows us to build large applications using objects, those objects can be anything.

When talking about objects we are talking properties and methods that are packed into a single object.
- __Property -__ means a characteristic of the object that can be read or even change
- __Methods -__ means what functions can be executed using the object or one of its instance

## Example
Let's say that we want to build a chess game, each piece will have certain **properties** like `color`, `position`, `pieceType`, `isAliveYet` and certain **methods** like `move()` or `capture()`, so we can say that we have an **object** name `ChessPiece` BUT we have different categories of pieces, for example pawns and bishops, both of them behave completly different however both have the same **properties and methods**. So far what we got will look like this:

```bash
Object ChessPiece 
{
	property color;
	property position;
	property pieceType
	property isAliveYet;

	method Move() 
	{
		// humm.. looks like chess pieces don not move all the same
	}

	method Capture() 
	{
		// capture a piece, means it removes a piece from the board
	}
}
```

Looks nice but is not enough, remember we need to have on the board 32 pieces:
	* 8 white pawns
	* 8 black pawns
	* 2 white bishops
	* 2 black bishops
	* ... and so on

So, before solving that, let's think what else we need, for example, we only have one representation of a ChessPiece, what about the rest of them? no worries, let's take pawns for our next step.

Now, we need to create a new object named `Pawn` that inherit from ChessPiece, why? because is stupid to repeat what is already done.

```bash
Object Pawn inherit from ChessPiece 
{
	getAllPropertiesMethodsFromAncestor();

	// but we also need to adjust a method so it matches how pawns behave

	method Move() 
	{
		// only forward logic and diagonal when capturing and en passant
	}
}
```

Since we have a pawn object, now we need at least 8 more to complete one set of pawns, so here's the trick, usually that first creation of the object will the considered a class meaning a blueprint of what the object will look like once created. Adn the actual creation of the object is called 'instance', it's like this:

```javascript
var firstWhitePawn = new Pawn();
```

By doing that I'm creating an instance of the object Pawn, the name of the instance is firstWhitePawn. That's not all, I also need to specify the properties:

```javascript
firstWhitePawn.color = 'white';
firstWhitePawn.position = 'A2';
firstWhitePawn.piceType = 'pawn';
firstWhitePawn.isAliveYet = true;
```

Above code can be fixed, because is obvious to say that piceType is a 'pawn' and that is 'true' that is still alive since the game just started, for that we have a constructor.

### Constructor
The constructor is executed everytime an object is instantiated, so for your blueprint or class you can specify which property can be requested when the object is created. Let's re-do what we've been talking about but with JavaScript code with ES6.

**Creating the ChessPiece class**
```javascript
class ChessPiece {
	// Initializing the obj properties
	constructor() {
		this.color;
		this.position;
		this.piceType;
		this.isAliveYet;
	}

	// here are the methods
	move() {
		console.log('moving');
	}

	capture() {
		console.log('capturing');
	}
}
```

**Creating the Pawn class**
```javascript
class Pawn extends ChessPiece {
	// Initializing the obj properties
	constructor(color, position) {
		super(color, position);
		this.piceType = 'pawn';
		this.isAliveYet = true;
	}

	// here is the method that changes
	move() {
		console.log('moving like a pawn does');
	}
}
```

**Creating the White Pawns instance**
```javascript
var cols = ['a','b','c','d','e','f','g','h'];
var whitePawns = [];

for (var i = 1; i <= 8; i++) {
	var pawn = new Pawn('white', `${cols[i-1]}2`);
	whitePawns.push(pawn);
}
```

# OOP Fundamentals

There are 4 core concepts to understand OOP, keep in mind that these paradigm was created with strongly typed language like C or C#, so it's far better to understand these concepts with any of those languages, however I'm putting here a brief explanation of what each one means or the main idea behind it.

## Encapsulation
The mere act of use bundles or packages, meaning, objects are a package and other object can take a look inside of it and change its properties when allowed, here we got the concept of getters and setters, ways to get info or set info in the object, in other languages you can say which property has a public or private access to it

```javascript
class PersonRobbie {
	constructor() {
		this.name = 'Robbie';
	}

	getName() {
		return this.name;
	}

	setName(newName) {
		this.name = newName;
	}
}
```

* Keeps the programmer in control of access to data
* Prevents the program from ending up in any strange or unwanted states

## Abstraction
When you use a car, you care about how to use the steerwheel, or the pedals and know how much gas do you have available, that's the basic info a normal driver needs to know, but what a regular driver doesn't need to know is how exactly the car works on the inside, that's irrelevant for many drivers.

That's the same approach for this concept that classes YOU write should abstract all it's logic from your regular users. For example, JS abstract the use of `window.alert('Hi');` so we do not worry about what the heck JS does to display an alert message on the browser... is the same idea.

Here is when comes in handy to know a language like C# because have keywords like `interface` or `abstract`.

## Inheritance
Classes can inherit methods and properties from another class. That simple. For example, we got the class `ChessPiece` and also the class `Bishop`, which inheriting from who? yep, `Bishop` class is inheriting from `ChessPiece`. In this case, `ChessPiece` will be a parent class or super class, and `Bishop` a child class or subclass.

```javascript
// Superclass
class ChessPiece {
	constructor(color, position) {
		this.color = color;
		this.position = position;
	}
}

// Subclass
class Bishop extends ChessPiece {
	constructor(color, position, colorMotion) {
		super(color, position); // calling the Superclass constructor
		this.colorMotion = colorMotion;
	}
}
```

## Polymorphism
Describe methods that are able to take on many form, methods and not classes. There are two types of them:

- **Dynamic Polymorphism -** occurs during runtime of the program, describes when a method is both a subclass and superclass
	* Shares the same methods but have different implementation
	* The implementation of the subclass that the object is an instance of overrides the superclass method

- **Static Polymorphism -** occurs during complie-time. It refers when **_methods with the same name but different arguments_** are defined in the same class, this is called **method overloading**

```javascript
// Let's set up an Animal and Dog classes
class Animal {
	constructor() {
		// Most animals we code up have 4. This can be overridden if needed
		this.legs = 4;
	}

	makeNoise() {
		console.log("Base noise");
	}
}

class Dog extends Animal {
	makeNoise() {
		console.log("Woof woof");
	}
}

var animal = new Animal();
var dog = new Dog();

animal.makeNoise(); // Base noise
dog.makeNoise();    // Woof woof- this was overridden
dog.legs;           // 4! This was inherited
```
---
That's the bsic info you need to know about OOP. From this concepts derives other concepts like programming patterns and SOLID principles.