/*
Use the same example but with the proxy object, should not allow the creation of new properties
*/

class CryptocurrencyAPI {
    getValue(coin) {
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

const proxy = new Proxy(api, {
    get(cryptoApi, prop) {
        return cryptoApi[prop];
    }
    ,
    set(obj, prop, value) {
        throw 'No new Property creation allowed';
    }
})

proxy.nulo = true;
console.log(proxy.nulo);
console.log( proxy.getValue('Bitcoin') );