// Sort():
//      it is method used to sort th elements of an array in place.
//      it sorts elements as strings in lexicographic order, not alphabetical
//  lexicographic = (alphabet + numbers + symbols)  as strings

let fruits = ["apple", "orange", "banana", "mango"];
fruits.sort();
console.log(fruits);


// Example# 02

let numbers = [1,4,6,2,4,8,10,3]
numbers.sort(); // this does not sort the numbers so we have to modify it
numbers.sort((a, b) => a-b); // ascending order
console.log(numbers);

numbers.sort((a, b) => b-a); // descending order
console.log(numbers);



// example: 03

const people = [
    {name : "Hamza", age: 21, gpa: 3.4},
    {name : "Haider", age: 17, gpa: 3.0},
    {name : "Hassan", age: 14, gpa: 2.5},
    {name : "Umar", age: 23, gpa: 4.0}
]

people.sort((a, b) => a.age - b.age);
console.log(people);

people.sort((a, b) => b.age - a.age);
console.log(people);

people.sort((a, b) => a.gpa - b.gpa);
console.log(people);

// for comparing strings

people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

people.sort((a, b) => b.name.localeCompare(a.name));
console.log(people);