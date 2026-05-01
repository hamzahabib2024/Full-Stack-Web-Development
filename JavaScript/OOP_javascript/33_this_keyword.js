// this keyword in JavaScript refers to the current object that is executing the code. 
// It can be used to access properties and methods of the object. The value of this depends on how the function is called.

// In the context of an object method, this refers to the object itself. However, in an arrow function, this does not refer to the object 
// but rather to the surrounding lexical context. 
// Therefore, it is generally recommended to use regular functions for object methods when you want to access the object's properties using this.
// it means that this keyword does not work with arrow functions when you want to access the properties of the object.


console.log(this); // In the global context, this refers to the global object (window in browsers)

const person1 = {
    firstName: "Hamza",
    lastName: "Habib",
    favfood: "Beef",
    sayHello: function(){
        console.log(`Hi I am ${this.firstName} ${this.lastName} and my favorite food is ${this.favfood}`);
    },
    eat: function() {
        console.log(`${this.firstName} is eating ${this.favfood}`);
    }
}

const person2 = {
    firstName: "Haider",
    lastName: "Habib",
    favfood: "Chicken",
    sayHello: function(){
        // console.log(`Hi I am ${this.firstName} ${this.lastName} and my favorite food is ${this.favfood}`);
        console.log(`Hi I am ${person2.firstName} ${person2.lastName} and my favorite food is ${person2.favfood}`);
    },
    eat: function() {
        console.log(`${this.firstName} is eating ${this.favfood}`);
    }
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();
