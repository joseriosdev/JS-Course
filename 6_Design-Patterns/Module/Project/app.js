/*
Do a module that handles

- The storage in memory of any given single item
- Fetch all the storaged items
*/

const StorageMod = (function() {
    return {
        storeItem(item) {
            let items;

            if(localStorage.getItem('items') === null) {
                items = [];
                items.push(item);
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                items = JSON.parse(localStorage.getItem('items'));
                items.push(item);
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemsFromStorage() {
            let items;

            if(localStorage.getItem('items') === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        }
    }
})();

let item1 = {
    info1: 'info1',
    info2: [2,2,2,2,2],
    info3: false,
    info4: 'info4'
}

let item2 = {
    info: 'info'
}

console.log(StorageMod.getItemsFromStorage());
StorageMod.storeItem(item1);
console.log(StorageMod.getItemsFromStorage());
StorageMod.storeItem(item2);
console.log(StorageMod.getItemsFromStorage());