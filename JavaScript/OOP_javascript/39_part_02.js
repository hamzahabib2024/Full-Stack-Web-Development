class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._firstName = value;
        } else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(value) {
        if (typeof value === 'string' && value.length > 0) {
            this._lastName = value;
        } else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(value) {
        if (typeof value === 'number' && value >= 0) {
            this._age = value;
        } else {
            console.error("Age must be a non-negative number");
        }   
    }

    
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get age() {
        return this._age;
    }
}

const person1 = new Person("Hamza", "Habib", 20);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);
console.log(person1.age);