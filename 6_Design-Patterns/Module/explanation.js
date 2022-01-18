/*
This Module Pattern is popular among JS

Consists in wrap a set of functions and variables into a single module scope.
This  the basic template looks like belows code

Use this for Maintainability & Reusability
*/

function MyModule() {
    var somePublicInfo = 43;
    var morePublicInfo = 'Jon';
    var thisCanBePrivate = 'no one will see it';

    function someFunction() {
        console.log('Doing something...');
        console.log(morePublicInfo);
    }

    // expose what you want
    return {
        somePublicInfo: somePublicInfo,
        morePublicInfo: morePublicInfo,
        someFunction: someFunction
    };
}

var usingTheModule = MyModule();
usingTheModule.someFunction();


// Here's another way of doing it
const Module = (function() {
    let age = 33;
    let name = 'Ginger';

    return {
        myFunction() {
            console.log('Hi there! ' + name);
        },
        age: age,
        ageIncreased() {
            this.age++;
        }
    }
})()

Module.ageIncreased();
console.log(Module.age);