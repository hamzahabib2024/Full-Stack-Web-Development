// classes in javascript:
    // Class is the es6 feature of JavaScript that provides a more structured and
    // clearer way to work with objects compared to constructor functions. 
    // it is used in static methods, encapsulation, inheritance, and polymorphism.

// Instead of using constructor functions, we can use the class syntax to create objects in JavaScript. 
// The class syntax is a more concise and easier way to create objects and deal with inheritance.

// inside the class, we donot need to write the function keyword to create a method,
//  we can simply write the method name followed by parentheses and curly braces.

class product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05; // 5% sales tax

const product1 = new product("shirt", 19.99);
const product2 = new product("pants", 22.50);
const product3 = new product("underwear", 99.99);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total1 = product1.calculateTotal(salesTax);
const total2 = product2.calculateTotal(salesTax);
const total3 = product3.calculateTotal(salesTax);

console.log(`Total price for ${product1.name}: $${total1.toFixed(2)}`);
console.log(`Total price for ${product2.name}: $${total2.toFixed(2)}`);
console.log(`Total price for ${product3.name}: $${total3.toFixed(2)}`);