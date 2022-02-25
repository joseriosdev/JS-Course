// Local storage saves information in a key value format
// The infor here will be saved on the local computer of the client
// Will last for ever
// Will always be converted to a String
// Better to use the JSON object for fomatting the data

// Create or save
localStorage.setItem('myNewItem', 'Item Value here');
localStorage.setItem('num', 20);
localStorage.setItem('items', ['item1','item2']);

// For retreiving the information
console.log(localStorage.getItem('myNewItem'));
console.log(localStorage.getItem('num'));
console.log(localStorage.getItem('items'));

// For update, just write the same item name
localStorage.setItem('num', 7);

// Delete only ONE
localStorage.removeItem('num');

// Delete all
localStorage.clear();