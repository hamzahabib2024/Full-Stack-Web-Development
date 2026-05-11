// Error objects: 
//      it is an object that is created to represent an a problem that occurs.

// error ofter occurs when we deal with user inputs or establishing a connection.

// we have some pre-defined error types in javascript:
//      1. referenceError
//      2. syntaxError
//      3. typeError
//      4. rangeError
//      5. URIError
//      6. internalError
//      7. EvalError

// errors can be generated for all sort of issues like
//   network errors
//   promise rejections
//   security errors

// we can handle these errors using try-catch blocks.
// try {} = in try block we write the code that may generate an error.
// catch {} = in catch block we write the code that will execute if an error occurs.
//             it catch and handle any thrown error from try block.
// finally {} = in finally block we write the code that will execute whether an error occurs or not.
// throw {} = in throw block we throw an error.


// try {
//     console.log(name);

// } catch (error) {
//     // console.log(error);
//     // for handling with errors we recommend to use console.error instead of console.log
//     console.error(error);
// }
// finally {
//     // finally block is used to:
//     // close any open connections
//     // clear any temporary variables
//     // release any resources
//     // close any files
//     // close any database connections
//     // close any network connections
//     // close any sockets
//     // close any streams
//     // close any files
//     console.log("this is finally block");
// }

// console.log("you have reached the end of the program.");



// exmaple 02:

try {
    const dividend = Number(window.prompt("Enter the dividend: "));
    const divisor = Number(window.prompt("Enter the divisor: "));

    if (divisor === 0) {
        throw new Error("Division by zero is not allowed");
    }
    else if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Invalid input. Please enter a valid number.");
    }

    const result = dividend / divisor;
    console.log(`The result of ${dividend} divided by ${divisor} is ${result}`);
}
catch (error) {
    console.error(error);
}
finally {
    console.log("this is finally block");
}
console.log("you have reached the end of the program.");