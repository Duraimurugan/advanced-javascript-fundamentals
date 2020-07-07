/**
 * @description Everything within JavaScript is not actually an object. 
 * There are many primitive types that are not objects and are used everyday by developers.
 */

console.log(typeof 'hello world') // string
console.log(typeof 1) // number
console.log(typeof false) // boolean
console.log(typeof 42n) // bigint
console.log(typeof Symbol()) // symbol
console.log(typeof null) // object
console.log(typeof undefined) // undefined

/**
 * Primitive types cannot be mutated 
 * There is a difference between mutating and reassigning the values
 * mutateObject() method- mutates an object as the Objects are passed by reference
 * addTwo() method - cannot mutate as the primitive types are passed by values
 */

let obj = { a : 1}
function mutateObject(obj) {
  obj.a = 2
}
mutateObject(obj)
console.log(obj) // {a: 2}

let num = 1
function addTwo(num) {
  num = num + 2
  console.log(num) // 3
}
addTwo(num)
console.log(num) // 1

