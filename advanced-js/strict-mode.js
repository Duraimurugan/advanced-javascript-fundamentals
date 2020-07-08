/**
 * @description
 * Strict mode catches silent errors and throws them, 
 * fixes mistakes that can make it difficult for JavaScript engines to perform optimizations
 */

// examples of errors catched by strict mode
// 1. error when trying to mutate a non-writable property
'use strict'
var obj = {}
Object.defineProperty(obj, 'first', { value: 'clark', writable: false })
name.first = 'tyler'    //Uncaught TypeError: Cannot create property 'first'

// 2. error when trying to use reserved keywords
'use strict'
var undefined = 5
var Infinity = 5

// 3.when using duplicate parameters in a function
function myName(first, first) {
    'use strict'
    return first
}

//Uncaught SyntaxError: Duplicate parameter name not allowed in this context

// 4.eliminate access to the window object when using the this keyword.
// outside of strict mode, when we return this, we get the window object.
// However, in strict mode, we get undefined

function myName(first) {
    return this
}
myName()    // undefined
