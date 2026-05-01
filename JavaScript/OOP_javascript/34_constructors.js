// constructor function:
//    it is special method for defining the properties and methods of an object.

// constructor function make the object automatically when we call the function with new keyword
// it saves us from writing the same code again and again to create multiple objects with same properties and methods

console.log("Constructor Function");

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.drive = function() {
        console.log(`You are driving ${this.make} ${this.model}`);
    }
}

const car1 = new Car("Toyota", "Camry", 2020, "Red");
const car2 = new Car("Honda", "Civic", 2019, "Blue");
const car3 = new Car("Ford", "Mustang", 2021, "Black");

console.log(car1);
console.log(car2);
console.log(car3);

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car1.drive();
car2.drive();
car3.drive();