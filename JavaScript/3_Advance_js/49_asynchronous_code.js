// synchronous:
//          synchronous is code that executes line by line consecutively in a sequential manner.
//  synchronous code waits for the previous code to finish before executing the next line.

// Asynchronous:
//          asynchronous code allows multiple operations to be performed concurrently, without waiting for the previous operation to complete.
//          it does not block the execution flow and allows the program to continue running while waiting for the previous operation to complete.
//          asynchronous is code that executes in a non-sequential manner.
//  asynchronous code does not wait for the previous code to finish before executing the next line.
// it is used in I/O operations, network requests, timers, etc.
// it is handled with : callbacks, promises, async/await




// synchronous example:
console.log("synchronous example started: ");

// console.log("task1");
// console.log("task2");
// console.log("task3");


// asynchronous example:
console.log("asynchronous example started: ");

// setTimeout(() => {
//     console.log("task1");
// }, 1000);

// setTimeout(() => {
//     console.log("task2");
// }, 500);

// setTimeout(() => {
//     console.log("task3");
// }, 800);

// console.log("task4");

// here you see that the rest of the program does not wait for the asynchronous code to finish.
//  thats why the task4 is executed before the tasks in the setTimeout.


// so now how to deal with this issue?
// Handling method 01: callbacks

console.log("callback example started: ");

function func1(callback) {
    setTimeout(() => {
        console.log("task1")
        callback();
    }, 3000);
}

function func2() {
    console.log("task2");
    console.log("task3");
    console.log("task4");
}


func1(func2);



