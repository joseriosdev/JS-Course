# What are the SOLID principles?
Are guidelines that helps you create robust software, in order to apply them you need to know OOP. These are advices, not strictly rules to follow, it will vary accorgindly to the project involved.

## Single responsability
Classes should be responsable for one single thing. If a class has many responsabilities can cause future bugs.

```javascript
class Beverage {
    constructor(name, alcohol, sugar) {
        this.name = name;
        this.alcohol = alcohol;
        this.sugar = sugar;
    }

    saveBeer(beer) {
        console.log('I am saving the Beer! ' + beer.name);
    }

    getAllBeers() {
        console.log('Getting all the beers!');
    }
}
```

The above code violates the Single Responsability principle, below code fixs it by applying the principle.

```javascript
class Beverage {
    constructor(name, alcohol, sugar) {
        this.name = name;
        this.alcohol = alcohol;
        this.sugar = sugar;
    }
}

class BeverageController {
    saveBeverage(beverage) {
        console.log('I am saving ' + beverage.name);
    }

    getAllBeverage() {
        console.log('Getting all the beers!');
    }
}
```

## Open-Closed
Once a class is done, you should only extend it not modify it.

```javascript
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    getVehicleWheels(vehicles) {
        for(let vehicle of vehicles) {
            if (vehicle.name === 'car')
                console.log('4');
            if (vehicle.name === 'bike')
                console.log('2');        
            if (vehicle.name === 'boat')
                console.log('0');
        }
    }
}
```

> Classes should be open for extension, but closed for modification

```javascript
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    getVehicleWheels() {}
}

class Car extends Vehicle {
    getVehicleWheels() { return 4 }
}

class Bike extends Vehicle {
    getVehicleWheels() { return 4 }
}

class Boat extends Vehicle {
    getVehicleWheels() { return 4 }
}
```

Yes, you ended up with a lot more classes, that's why you decide if is needed for your project, as a general rule, the second approach will prevent future spagetti code, meaning a better code that can last for the long run.

## Liskov's Substitution
Subclasses should do the same thing than its superclass... a class should be replaceable by its child.

```javascript
class Superclass {
    static doCoffee() {
        console.log('Coffee done!');
    }
}

class Subclass extends Superclass {
    static doJuice() {
        console.log('Juice done!');
    }
}

Subclass.doCoffee();
```

At first gaze it looks obvious, actually, looks like simple inheritance stuff, but here is the catch... actually, this exposes a common issue that inheritance has, for example.
You have the _Animal class_ with the _makeNoise() method_ but while creating a Snail that inherits from Animal; you realized that not all Animals does noise, so then you need to refactor.

That's exactly what Liskov's Substitution wants to avoid. Whatch this video that talks about [Composition over Inheritance](https://www.youtube.com/watch?v=nnwD5Lwwqdo).

## Interface Segregation

> _When we are favoriting composition, when we have **small roles that objects can play with** is much easier to design new objects without having to make enterily new classes_

This principle talks about the use of interfaces, a concept that JS does not has. However the idea is that a class should not be forced to use methods that will not need, this approach favors composition of objects instead of inheritance, so, each class implements only what it will be using.

In the below code from [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw), we had a game that is implementing this principle, for that instead of using real _interfaces_ is using objects literals with functions that represents the interfaces and then attach this "interfaces" to objects prototypes with `Object.assign(Object.prototype, interfaceName)`.

```javascript
class Entity {
    constructor(name) {
        this.name = name;
    }
}

const motion = {
    move : function() {
        console.log(`${this.name} moved`);
    }
}

const attacker = {
    attack : function(target) {
        console.log(`${this.name} attacked ${target.name} for ${this.attackDamage} damage`);
        target.takeDamage(this.attackDamage);
    }
}

const hasHealth = {
    takeDamage : function(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
}

class Character extends Entity {
    constructor(name, attackDamage, health) {
        super(name);
        this.attackDamage = attackDamage;
        this.health = health;
    }
}

Object.assign(Character.prototype, motion);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, hasHealth);

class Wall extends Entity {
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity {
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}

Object.assign(Turret.prototype, attacker);

const turret = new Turret('Fire Turret', 8);
const hero = new Character('Aang', 9, 162);
const wall = new Wall('Metal Wall', 150);

turret.attack(hero);
hero.move();
hero.attack(wall);
```

## Dependecy Inversion
Before talking about this principle we need to understand 2 concepts:

* __Dependency -__ It's when a class depends from another class to work, for example: the class _Fetch_ needs the class _Database_ in order to work well.
* __Dependency Injection -__ It's how you inject or use another class inside a class, the easy way is with the constructor, if the constructors has a parameter that is basically a class, then that's a dependency injection, there are more ways to do this, but constructor is the simple one.

> High-level modules should not depend on low-level modules. Both should depend on the abstraction

What this means is that between the interaction of two classes that needs a dependency, you should use an abstraction level that can be done with _Interfaces_ or _Abstract_ classes. In JS it's kinda tricky but still possible.

<p align="center">
    <img src="https://www.researchgate.net/profile/Ali-Fathi-Sawehli/publication/332590977/figure/fig10/AS:750872531308556@1556033370652/Dependency-Inversion-Principle-example.ppm" width="350" alt="Dependency Inversion Principle">
</p>

```javascript
class PayItem {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    bikePayment(amount) {
        this.paymentProcessor.pay(amount * 9);
    }

    carPayment(amount) {
        this.paymentProcessor.pay(amount * 5);
    }
}

// this is the 'interface'
class PaymentProcessor {
    constructor(user) {
        this.paymentMethod = new PaymentMethod(user);
    }

    pay(amount) {
        this.paymentMethod.makePayment(amount);
    }
}

class PaymentMethod {
    constructor(user) {
        this.user = user;
    }

    makePayment(amount) {
        console.log(this.user+ ' did a payment of $' +amount+ 'USD with X payment method.');
    }
}

const payItem = new PayItem(new PaymentProcessor('Joe'));
payItem.bikePayment(22);
payItem.carPayment(22);
```

That should wrap it up, thanks for reading, hope next post with illustrations can be useful for your learning process.

[S.O.L.I.D](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)

