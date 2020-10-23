/**
 * example of Enumberables: 
 * 1. A bag of M&Ms is an enumerable
 * 2. A pile of books is an enumerable
 * 3. JSON objects are enumerables
 * 
 */

//  Use for.. in for enumerables

const person = {
    name: 'Durai',
    age: 12,
    address: 'FL'
};

for (const key in person) {
    console.log(key + ': ' + person[key]);
}

/**
 * output: 
 * name: Durai
 * age: 12
 * address: FL
 */


/**
 * Example of iterables:
 * 1. The line at the DMV is an iterable
 * 2. A row of books on a shelf is an iterable
 * 3. JSON arrays are iterables
 */

 // Use for.. of for iterables
 

const states = ['FL', 'CA', 'TX'];

for (const state of states) {
    console.log(state);
}

/**
 * FL
 * CA
 * TX 
 */

 // When you use for in for iterables, it iterates over the index
let scores = [43,58,28,69,38];
for(const item in scores) {
   console.log(item);
}
/*
"0"
"1"
"2"
"3"
"4"
*/