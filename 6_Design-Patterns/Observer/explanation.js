/**
The observer pattern is behavioral
Lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing
*/

// The Subject
class Newsletter {
    constructor() {
        this.subscribers = []; // array of functions (the subscribers)
    }

    subscribe(fn) {
        this.subscribers.push(fn);
    }

    unsubscribe(fn) {
        this.subscribers = this.subscribers.filter( item => item !== fn );
    }

    trigger() { // notifies the observers
        this.subscribers.forEach( fn => fn.call() );
    }
}

// The Observers
function subscriber1() {
    console.log('Sub1 was notified');
}

function subscriber2() {
    console.log('Subscriber 2 were notified.');
}

const newsletter = new Newsletter();

newsletter.subscribe(subscriber1);
newsletter.trigger();
console.log('---');
newsletter.subscribe(subscriber2);
newsletter.trigger();
console.log('---');
newsletter.unsubscribe(subscriber1);
newsletter.trigger();