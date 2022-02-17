// selecting the body
console.log(document.body);

// selecting a single element with its id
var selectWithId = document.getElementById('grandParent');
console.log('selectWithId: ', selectWithId);

// select based on CSS selectors
var CSS_selectingStyle = document.querySelector('div.child');
console.log('CSS_selectingStyle: ', CSS_selectingStyle);

// As you can see, we got 4 divs with a child class but on got FIRST one selected
// let's this time select all the div with child class
var allChildrenClass = document.querySelectorAll('div.child');
console.log('allChildrenClass: ', allChildrenClass); // returns a nodeList

// similarly, you can use:
var allParents = document.getElementsByClassName('parent');
console.log('allParents: ', allParents); // HTMLCollection
console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByName('div'));

/* HERE'S WHEN IT COMES THE TRAVERSING PART
Since the DOM is a tree made out of nodes, then you can select up and down or sideways
 UP -> parents
 DOWN -> children
 SIDES -> siblings
*/


// Selecting downwards (children)
var grandparent = document.querySelector('#grandParent');
console.log(grandParent.children);
console.log(grandParent.firstChild); // node
console.log(grandParent.firstElementChild);
console.log(grandParent.lastChild); // node
console.log(grandParent.lastElementChild);
// NOTE: element.querySelector -> can be used with any Element


// Selecting upwards (parents)
var anyChild = document.querySelector('.child');
console.log(anyChild.parentElement);
console.log(anyChild.parentNode);
console.log(anyChild.parentElement.parentElement); // moving up
console.log(anyChild.closest('#grandParent'));

// Selecting sidewards (siblings)
var anyParent = document.querySelector('.parent');
console.log(anyParent.nextElementSibling);
console.log(anyParent.previousElementSibling)