/**
 * Destructuring
 * 
 * Object destructuring - allows to create variables from object property names
 * variable will contain value of the property name
 */

const data = {a:1, b:2, c:3};
const {a, b, c} = data;
console.log(a, b, c);   // 1 2 3


// deleting a property - traditional way
// the property is physically removed and its mutable

var sampleObj = {
    a: 1,
    b: 2
};

delete sampleObj.a;
sampleObj;  // {b: 2}


// deleting a property - destructuring
// the property is not removed - but excluded and it follows immutable pattern
const newObj = {d:4, e:5, f:6};
const {d, ...rest} = newObj;

console.log(d); // 4
console.log(rest);  // {e: 5, f:6};