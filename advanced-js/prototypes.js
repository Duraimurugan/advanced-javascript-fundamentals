/**
 * @description
 * whenever we define a function, Javascript create a .prototype property
 */

function foo() {}
console.log(foo.prototype);

// {constructor: f}
// constructor: f foo()
// _proto_ : Object

/**
 * Function -> prototype property is automatically created. This property is not used in prototype chain lookup
 * Object -> dunder proto property is automatically created and used in prototypal inheritance
 */

function bar() {}
bar.prototype.test = 'hello world';
console.log(bar.prototype);

const name = new bar();
console.log(name.test);

// .prototype is used to attach/add a property
// example: Array.map -> map is part of prototype of inbuilt Array type