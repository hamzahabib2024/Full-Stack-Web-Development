// Getters and Setters in JavaScript

// Getters: 
//    getters are the special methods that make a property read-only. 
// They are used to get the value of a property.

// Setters:
//    setters are the special methods that make a property write-only. 
// They are used to set the value of a property.

// they validate and modify a value when reading or writing a property.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Getter for width
    get width() {
        return this._width;
    }

    // Setter for width
    set width(value) {
        if (value <= 0) {
            console.error("Width must be a positive number");
        } else {
            this._width = value;
        }
    }

    // Getter for height
    get height() {
        return this._height;
    }

    // Setter for height
    set height(value) {
        if (value <= 0) {
            console.error("Height must be a positive number");
        } else {
            this._height = value;
        }
    }
}

const rectangle1 = new Rectangle(10, 5);

console.log(rectangle1.width);
console.log(rectangle1.height);

rectangle1.width = -5;

console.log(rectangle1.width); // (unchanged due to validation)

rectangle1.height = 15;

console.log(rectangle1.height);