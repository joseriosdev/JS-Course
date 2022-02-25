To save data is a huge part of programming, for now, we'll learn how to save data in places that are not a database. Here are the main three.

## [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)
`myStorage = window.sessionStorage;`

Is the info that is saved while you are browsing on a tab, for example, a survey, whatever you fill up before submitting as long as you have the tab open is stored somewhere in the computer, that's the session storage.

## [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
`myStorage = window.localStorage;`

Is a designated space where a site can save information on the client's computer, it is data that can be retrieved later through code.

## ['Cookies](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
`document.cookie = newCookie;`

Came from the Chinese fortune cookies that save a chunk of info inside of it. Is the same idea but in code, what's different from the other two is that cookies can be transfered through internet and saved on a database.

### A table for easy remembering:

|                      | Cookies            | Local Storage | Session Storage |
|:--------------------:| :----------------: | :-----------: | :-------------: |
| **Capacity**         | 4kb                | 10mb          | 5mb             |
| **Browsers**         | HTML4 / HTML5      | HTML5         | HTML5           |
| **Accessible from**  | Any window         | Any window    | Same tab        |
| **Expires**          | Manually set       | Never         | On tab close    |
| **Storage Location** | Browser and server | Browser only  | Browser only    |
| **Sent with request**| yes                | no            | no              |

## JSON
JavaScript Object Notation better known as JSON, is a format for easy data transaction so its uses are widly used. You migh need to transform regular JS objects to these format, and vice-versa.

```javascript
// Regular JS obj
let myObj = { name: 'Bruno' };

// Parsing to JSON format
let myJson = JSON.stringify(myObj);
console.log(myJson); // '{ "name": "Bruno" }'

// Parsin to JS object
let obj = JSON.parse(myJson);
```