/**
 * @description
 * What are closures
 * 1. Closures are innner function that has access to its lexical scopes - which includes
 * its own scope, lexical scope and parent scope
 * 2. Closure functions retains access to its parent variables
 * 3. Closures don't close over a value and only over variables
 *
 */

// example: 1

const globalVariable = 'Javascript';

function outerFunction() {
    const outerVariable = 'runs on';
    return function innerFunction() {
        const innerVariable = 'Browsers';
        console.log(globalVariable, outerVariable, innerVariable);
    }
}

const run = outerFunction();
run();  // Javascript runs on Browsers


// The Array.map() function is a closure function because
// its nested function within a function has access to its parent's scope

// example 2
[1].map(a => a * 2);  //[2]


// example 3: 
// Simple closure

let i=0;
let closure = () => {
    console.log(i++);
};

closure(); // 0
closure(); // 1
closure(); // 2

/* reference: mdn
Closure with modularity
*/

let counter = (() => {
	value = 0;
  
  return {
  	increment: () => {
    value = value + 1
    	return value;
    },
    decrement: () => {
    	return value--;
    },
    count: () => {
    	return value;
    }
  }
})();

console.log(counter.count());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.count());
console.log(counter.decrement());
