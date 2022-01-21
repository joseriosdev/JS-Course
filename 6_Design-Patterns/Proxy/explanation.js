/*
Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object.
A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

JS as its own proxy object already created, it's build-in
For this one, we're going to show the pattern and the build-in object, usually, you'll use the build-in object.
*/

// External API Service
function CryptocurrencyAPI() {
    this.getValue = function(coin) {
        console.log('Calling External API...');

        switch(coin) {
        case 'Bitcoin':
            return '$8,500';
        case 'Litecoin':
            return '$50';
        case 'Ethereum':
            return '$175';
        default:
            return 'NA';
        }
    }
}

const api = new CryptocurrencyAPI();
console.log('----------Without Proxy----------');
console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Litecoin'));
console.log(api.getValue('Ethereum'));
console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Litecoin'));
console.log(api.getValue('Ethereum'));


function CryptocurrencyProxy() {
    this.api = new CryptocurrencyAPI();
    this.cache = {};

    this.getValue = function(coin) {
        if(this.cache[coin] == null)
            this.cache[coin] = this.api.getValue(coin);
        return this.cache[coin];
    }
}

console.log('----------With Proxy----------');
const proxy = new CryptocurrencyProxy();
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Ethereum'));
console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Ethereum'));


/*
here is the full info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
the proxy obj in JS has two parameters, the target and the handlers
then within the handler you can user get or set (that's encapsulation) to modify the functionality
*/
// target can be anything with an obj proto
const target = {
    txt1: 'Text Number 1',
    txt2: 'Text No2',
    func: function(arg = '!!') {
        console.log('Hello World '+arg);
    }
}
// handler follows the functions that proxy build-in obj has with its params
const handler = {};
handler.get = function(target, property, value) {
    // target: the target element
    // property: the property assigned to the proxy
    // value: if the property is assigned, then the value is here
    return  property in target ? target[property] : target[property] = value;
}

const p = new Proxy(target, handler);
p.t = 't';
console.log(p.t); // t
console.log(p.txt1); // Text Number 1
console.log(p.t + p.txt2); // tText No2
p.func(':D'); // Hello World :D
