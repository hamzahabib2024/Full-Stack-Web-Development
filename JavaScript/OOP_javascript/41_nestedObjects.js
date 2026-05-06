// nested Objects
//    nested objects are objects that are inside other objects.
//    they allow us to represent more complex data structures.
// A child object is enclosed within the parent object.

// Person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// here all the address, contactInfo, keyboard, mouse, and monitor are objects.


const person = {
    fullName: "Hamza Habib",
    age: 21,
    isStudent: true,
    hobbies: ["coding", "gaming", "traveling"],
    address: {
        street: "123 Main St",
        city: "Islamabad",
        country: "Pakistan"
    },
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.address.city);
console.log(person.address.country);

// or we can iterate through the properties of the nested object by loop

for (const property in person.address)
{
    console.log(person.address[property])
}

//OR

const key = Object.keys(person.address)
console.log(key);
for (let i = 0; i<key.length; i++)
{
    console.log(key[i]);
    console.log(person.address[key[i]]);

}
console.log(person.address['country']);


// Example 02: 
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);

    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Hamza Habib", 21, "main street", "Islamabad", "Pakistan");
const person2 = new Person("Haider Habib", 17, "2nd main street", "Dir", "Pakistan");
const person3 = new Person("Umar Habib", 17, "sunset street", "Madina", "Saudi Arabia");


console.log(person1);
console.log(person2);
console.log(person3);

console.log(person1.address.street);
console.log(person3.address.street);
