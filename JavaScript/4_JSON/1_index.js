// JSON: (JavaScript Object Notation)
//      it is data-interchange format
// it is mostly used for exchanging data between server and a web application.
// it has few different formats:
// usually you see the json file as object or array 
// json files : {key:value} or [{key:value},{key:value}] or ["value1","value2","value3"]


// JSON.stringify() : it converts a JavaScript object or value to a JSON string                     (json object to json string)
// JSON.parse() : it parses(means convert) a JSON string and returns a JavaScript object or value   (json string to js object)



// const names = ["Hamza", "Haider", "Hassan", "Hussain", "Hafiz"];
// const person = {
//     "name": "Hamza",
//     "age": 21,
//     "country": "Pakistan",
//     "skills": ["JavaScript", "React", "Node.js"],
//     "isStudent": true
// };

// const names_jsonString = JSON.stringify(names);
// const person_jsonString = JSON.stringify(person);

// console.log(names);
// console.log(person);

// console.log(names_jsonString);
// console.log(person_jsonString);


const jsonNames = `["Hamza", "Haider", "Hassan", "Hussain", "Hafiz"]`;
const jsonPerson = `{
    "name": "Hamza",
    "age": 21,
    "country": "Pakistan",
    "skills": ["JavaScript", "React", "Node.js"],
    "isStudent": true
}`;

const names = JSON.parse(jsonNames);
const person = JSON.parse(jsonPerson);


console.log(jsonNames);
console.log(jsonPerson);

console.log(names);
console.log(person);
