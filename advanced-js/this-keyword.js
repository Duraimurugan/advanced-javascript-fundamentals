/**
 * 'this' keyword refers to the execution context of a function's call
 * 'this' keyword can be different based on how the function is called
 * 
 */

const person = {
    firstName: 'Durai',
    getName() {
        return `${this.firstName} is my first name`
    }
}

console.log(person.getName());

/**
 * Arrow function does not have 'this' keyword
 * Treats the 'this' context keyword as a regular variable
 * 
 */