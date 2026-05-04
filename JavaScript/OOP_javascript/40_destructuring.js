// Destructuring in javascript:
//  Destructuring allows us to extract values from arrays and objects,
//  then assign them to variables in a convenient way.

// [] = to perform array destructuring
// {} = to perform object destructuring

//Example 01: Swap the values of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a);
console.log(b);

//Example 02: swap two elements in an array

const colors = ['red', 'green', 'blue', 'black', 'white'];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);
 

//Example 03: Assign array elements to variables

const colors2 = ['red', 'green', 'blue', 'black', 'white'];

const [firstColor, secondColor, thirdColor, ...otherColors] = colors2;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(otherColors);
// firstColor, secondColor, and thirdColor are all variables
//  that hold the values of the first three elements of the colors2 array.
// otherColors is an array that holds the remaining elements of the colors2 array.



// Example 04: Extract values from objects

const person1 = {
    firstName: 'Hamza',
    lastName: 'Habib',
    age: 21,
    job: 'AI Engineer',
}

const person2 = {
    firstName: 'Haider',
    lastName: 'Habib',
    age: 17,
}

const { firstName, lastName, age, job } = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

const { firstName: fName, lastName: lName, age: personAge, job: personJob = "Unemployed" } = person2;
console.log(fName);
console.log(lName);
console.log(personAge);
console.log(personJob);


// Example 05: Destructure in function parameters

// we take the two objects of the example 04 in this example.

function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);