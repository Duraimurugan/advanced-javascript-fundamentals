/**
 * Map/Weak-Map
 * 
 * Map - key - value pair and similar to objects
 * difference between Object and Map
 * 1. Object keys have to be string
 * 2. Map keys can anything - function or object
 */

(() => {
    let myMap = new Map();

    /**
     * Map have methods to get size and keep track of the map
     */
    let myObj = {};
    let myFunc = function () { };

    myMap.set('foo', 'bar');
    myMap.set(myObj, 'obj');
    myMap.set(myFunc, 'func');
    myMap.set('string', 2);
    myMap.set(5, 2);
    console.log(myMap);

    /**
     * different methods on a Map();
     */
    // myMap.set();
    // myMap.get();
    // myMap.has();    // returns boolean
    // myMap.size();   // return size of a Map

    /**
     * iterable methods on a Map
     */
    // myMap.keys();
    // myMap.values();
    // myMap.entries(); // iterable


    /**
     * Weak map - No references are held to the keys of the map
     *          - are innumerable - cannot iterate over them 
     *          - cannot have string as a key
     */
    let myWeakMap = new WeakMap();
    myWeakMap.set('string', 3);     // Uncaught TypeError: Invalid value used as weak map key
})();

