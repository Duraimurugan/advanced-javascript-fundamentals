/**
 * @description
 * var - function execution scope
 * let/const - block scope
 */

var firstName = 'tyler';

function foo() {
  var firstName = 'clark';
  console.log(firstName);
}

console.log(firstName);
foo();

/**
 * All var declarations are hoisted only to the top of their execution context with an initial value of undefined
 * All let/const are not hoisted to top of execution context
 * 
 */

var firstName = undefined;
var firstName = 'tyler';

function foo() {
  var firstName = undefined;
  var firstName = 'clark';
  console.log(firstName);
}

console.log(firstName);
foo();

/**
 * If we try to redclare var -> no error
 * let/const -> error will be thrown
 */

let firstName = 'tyler';

{
  let firstName = 'clark';
  let firstName = 'tyler';
  console.log(firstName);
}

console.log(firstName);