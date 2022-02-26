# What is Asynchronous?

The concept can be explanied with the next example: You are doing a task for today, however you need to prepare food for lunch, but you choose to delegate that task to a restaurant while you finish the main one, so in an async way... you where able to complete two task in the shortest amount of time by requesting food to a restaurant while you were working.

# How does it apply to JS?

Since Js is build to be a **programming language for the web**, then, Async stuff applies directly for web development itself.

Because while the page works fine will sometimes **request** things to let's say restaurants just like in the above example but instead of that will be servers from any part of the world.

Nonetheless this requests are usually a bunch of data that will be processed asynchronouly.

## What can be transferred?

Almost Anything! from single character to a 4k video, anything that can be computed, will be tranferred through internet using the web system created.

For that we use async JavaScript and a couple of formats for sending data:

* __JSON -__ JavaScript Object Notation is similar to object literal in JS
    ```json
    { "name": "Bob" }
    ```
* __XML -__ Extended Mark Up Language is the usually seen as the old way of sending info but still revelevant for old organizations like banks.
    ```xml
    <person>
        <name>Bob</name>
    </person>
    ```

## Old & New

* __XHR Object -*old*__ Instanciating an object in order to create the request
* __Fetch API -*new*__ Using the in-build method Fetch for the request