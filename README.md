# Advanced Javascript fundamentals


## Primitive types
Primitive types cannot be mutated as the types are passed by values
Objects can be mutated as they are passed by reference


## Prototype and __ proto__ property
whenever a Object is created, Javascript creates it with the dunder __ proto__ property
whenever a function is created, JS creates it with .protoype property

***Difference***: dunder __ proto__ is used in prototypal chain lookup but not .prototype property


## var, let, const
###### Scope 
var = function execution scope

let/const = block scope

###### Hoisting
var = hoisted to the top of the execution context

let/const - not hoisted

###### Redeclaration
var = No error

let/const error

