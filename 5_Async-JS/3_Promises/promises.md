# The concept of [Promise in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise, 'MDN Documentation')

When talking about it, what is pretended to be is that a chunk of code is doing a **_promise_** of doing something, and eventually will **resolve** or **reject** the promise.

Once a promise as been completed, meaning that was done or not, you can use the `.then()` when resolved() or `.catch()` when rejected.

**A Promise is in one of these states:**

* __pending:__ initial state, neither fulfilled nor rejected.
* __fulfilled:__ meaning that the operation was completed successfully.
* __rejected:__ meaning that the operation failed.

## [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) function or API

The `fetch()` api is what came along with promises, promises where build in a way that you can use the fetch api. Instead of using the XHR object, now is with fetch which returns a promise.