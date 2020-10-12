## Map
    ###### similar to objects
    ###### In object - keys have to string
    ###### In map - key can range anything from number, object or function
    ###### Map have methods
        --- myMap.set();
        --- myMap.get();
        --- myMap.has();    // returns boolean
        --- myMap.size();   // return size of a Map

        // iterable methods
        --- myMap.keys();
        --- myMap.values();
        --- myMap.enteries();

## Weak Map
    --- No references are held to the keys of the map
    --- are innumerable - cannot iterate over them
    --- cannot have string as a key - throws Uncaught TypeError: Invalid value used as weak map key
