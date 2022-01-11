/*
the idea that classes can inherit and at the same time adapt to the current class behaviour
by using a language like java, you can expand more knowledge from this topic
*/

// Let's set up an Animal and Dog classes
function Animal(){}
function Dog(){}

Animal.prototype.makeNoise = function() {
	console.log("Base noise");
}

// Most animals we code up have 4. This can be overridden if needed
Animal.prototype.legs = 4;

Dog.prototype = new Animal();

Dog.prototype.makeNoise = function() {
	console.log("Woof woof");  
}

var animal = new Animal();
var dog = new Dog();

animal.makeNoise(); // Base noise
dog.makeNoise();    // Woof woof- this was overridden
dog.legs;           // 4! This was inherited
