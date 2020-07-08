
/**
 * @description
 * ES6 classes are syntactic sugars on JS functions
 */

class Workshop { }
console.log(typeof Workshop); // function


/**
 * @description - ES6 version
 * extends keyword establishes connection between two classes through prototype chain
 */
class Rectangle { }
class Square extends Rectangle { }
console.log(Object.getPrototypeOf(Sqaure)) //[Rectangle]

/**
 * @description - Non ES6 version
 */
function Rectangle() { }
function Square() { }
Object.setPrototypeOf(Square, Rectangle)
console.log(Object.getPrototypeOf(Square)) //[Rectangle]


/**
 * @description - use of super keyword in es6 class
 * super keyword is used to access the class's parent
 * super tends to call the constructor function on the parent class we're extending
 */

class Rectangle {
    constuctor(height, width) {
        this.name = 'Rectangle'
        this.height = height
        this.width = width
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length)
        this.name = 'Square'
    }
}

const myShape = new Square(1)

console.log(myShape)


/**
 * @description - use of static keyword in es6 classes
 * The static keyword sets the property to the class itself and not to the .prototype object
 * The static properties or methods cannot be accessed in the instance of the class
 */

class Rectangle {
    static callRectangle() {
        return `hello world`;
    }
}

const myShape = new Rectangle();
console.log(myShape.callRectangle);     // undefined

/**
 * @description
 * however the static properties can be called using the super() keyword and subclass components
 */

class Square extends Rectangle {
    static whoAmI() {
        return "Hello, all " + super.callRectangle()
    }
} 