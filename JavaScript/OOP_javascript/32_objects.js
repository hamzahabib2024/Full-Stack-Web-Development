// object = {
//     key: value,
//     Method: function()
// }


const person1 = {
    firstName: "Hamza",
    lastName: "Habib",
    age: 20,
    isEmployed: false,
    sayHello: function() {
        console.log("Hi I am Hamza Habib");
    },
    eat: () => {
        console.log("Hamza is eating beef");
    },
}

const person2 = {
    firstName: "Haider",
    lastName: "Habib",
    age: 30,
    isEmployed: true,
    sayHello: function() {        console.log("Hi I am Haider Habib");
    },
    eat: () => {        console.log("Haider is eating chicken");
    },
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();