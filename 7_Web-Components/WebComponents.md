> Many Frontend frameworks uses these web components underneath. _[ref video](https://www.youtube.com/watch?v=PCWaFLy3VUo)_

# What are them?

**Set of web platform API's** that allows us to create custom, reusable and encapsulated HTML tags to use in web pages and web apps.

Web Components do not require any special 3rd party libraries or frameworks but can certainly be used with them.

You can:

* Create your own custimized HTML tag
* Custom Events
* Classes extends from HTMLElement
* Access to [Lifecycle methods](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
	* `constructor()`
	* `connectedCallback()`
	* `disconnectedCallback()`
	* `attributeChangedCallback(attrName, oldVal, newVal)`

## Shadow DOM

Generates its own entity for your component that is apart from the regular DOM, this is useful because whatever you create for your component, will affect only that component.

* Used for self-contained components
* Encapsulate styles and markup
* Create with `element.attachShadow({ mode: 'open' })`
* Creates a **Shadow Root** that we can reference and interact with

## HTML Templates

* Define the encapsulated markup of our web component
* Template tag stores markup on page
* Include both HTML and CSS in templates
* Use _slots_ to add custom text