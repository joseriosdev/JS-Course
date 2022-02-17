# What are events?

Events are actions that a software can recognize, those actions usually are made by the user. We got:

* Mouse events
	* click
	* move
	* press and hold
	* etc
* Screen events
	* touch
	* scroll
	* etc
* Keyboard events
	* press a certaing key
	* press and hold a key
	* etc

There are many, and we'll see some of them.

## Event Bubbling

Imagine that a bubble is an event, the bubble starts from the deep of the ocean and bubbles up until it reaches the surface, well that's the concept of event bubbling, when an event is fired on a child but can bubble up all its way up until it reaches the root element.

## Event Delegation

When you pass by the event to a target child, in this situation, you will be using a lot DOM traversing.