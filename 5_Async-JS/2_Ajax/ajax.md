# Asynchronous JavaScript and XML (AJAX)

Is the old way of doing API calls. However this was a great tool that you might encounter someday.

All starts when instantiating the **[XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest, 'go to link')** object: `new XMLHttpRequest()`. With this object you can now use the big three methods...

* `.open(method, url, bool)` - for creating your request to the server
* `.onload = function() {}` - the callback function that will execute when finish the request
* `.send()` - makes sure that the callback was send

The object also have several properties that allows the easy reading of important values like status, reponse, responseXML, responseText, etc.