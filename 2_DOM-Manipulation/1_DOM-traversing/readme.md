## In this folder...

you should know already the basics of HTML and CSS, because now is when starts to be absolutely useful and necessary. By seen the `main.html` file and change the `src` attribute inside the `<script>`  tag, you can change between the several scripts.

Remember to use [bootstrap](https://getbootstrap.com/) from now on as possible. Or you can also use any other CSS framework or not but is recommended to use it just to have a nice result on the exercises.

---

> Recommended videos **=>** { [video1](https://www.youtube.com/watch?v=y17RuWkWdn8, 'DOM Manipulation') & [video2](https://www.youtube.com/watch?v=v7rSSy8CaYE, 'DOM Travesal') }

# Important concepts coming up!

## Node vs Element

In JS DOM, __everything__ is a [node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType) but not every node is an element, actually there are 12 types of nodes.

1. Element_Node
2. Attribute_Node
3. Text_Node
4. CDATA_Secion_Note
5. Entity_Reference_Node
6. Entity_Node
7. Processing_Intruction_Node
8. Comment_Node
9. Document_Node
10. Document_Type_Node
11. Document_Fragment_Node
12. Notation_Node

> When dealing with DOM traversing and manipulation, almost every node element has a build in way of selecting a node or element that might look similar. **For example:** `document.body.parentNode` is a node of any type and `document.body.parentElement` is a node of type element _(1)_.

## innerText vs textContent properties

This is a common question, however notice that there is a hidden hierarchy:

* [Node Object](https://developer.mozilla.org/en-US/docs/Web/API/Node)
	* [Element Object](https://developer.mozilla.org/en-US/docs/Web/API/Element)
		* [HTMLElement Object](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
		* [SVGElement Object](https://developer.mozilla.org/en-US/docs/Web/API/SVGElement)

So each object has its own properties and last object inherit from the upper ones _(will have more sense when learning about OOP, I promise)_, what it really means is that:

1. innerText is part from HTMLElement
2. textContent is from Node Object
3. Might look the same both came from different objects and behave different
4. innerText will take the literal text from the element
5. textContent will take any text, including spaces from the node element

## That's why we got _NodeList_ and _HTMLCollection_

```javascript
// returns a NodeList -> with iterator
console.log(document.querySelectorAll('.child'));

// returns a HTMLCollection -> without iterator
console.log(document.getElementsByClassName('child'));
```