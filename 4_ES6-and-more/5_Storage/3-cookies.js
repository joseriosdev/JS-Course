// Cookies also works wih key value storage BUT in  a single line on string
document.cookie = 'username=joseriosdev';
document.cookie = 'fav_food=italian food';
console.log(document.cookie);

// each cookie has properties that can be set
document.cooke = `age=20; expires=${new Date(2999,1,1)}; SameSite=None; Secure`;