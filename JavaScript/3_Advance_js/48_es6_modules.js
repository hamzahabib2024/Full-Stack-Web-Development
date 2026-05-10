// ES6 Modules:
//    A module is an external file that contains reusable code that can be imported into other javascript files.
//    
//  by use of modules we can write reusable code for different apps.
// it can contain variables, functions, classes, etc.

// es6 modules were introduced in ecmascript 2015 (es6).


import { PI, getCircumference, getArea, getVolume } from "./48b_math_util.js";
// {} --> it is object destructuring.


console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`Circumference = ${circumference.toFixed(2)}cm`);
console.log(`Area = ${area.toFixed(2)}cm^2`);
console.log(`Volume = ${volume.toFixed(2)}cm^3`);
