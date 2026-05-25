// Promises:
//          A promise is an object that manages asynchronous operations.
//          we wrap a promise object around asynchronous code.
// the promise object promise that 
//                     "I promise to return a value in the future"
//                      promise will be :  PENDING --> RESOLVED OR REJECTED
// new promise ((resolve, reject)=>{asynchronous code})


// .then method is used to handle the resolved value of a promise. 
// it takes a callback function as an argument, which is executed when the promise is resolved successfully. 
// The resolved value is passed as an argument to the callback function.
// and it returns a new promise, allowing for chaining multiple .then() calls together.

// .catch method is used to handle the rejected value of a promise. 
// it takes a callback function as an argument, which is executed when the promise is rejected. 
// The rejected value is passed as an argument to the callback function.
// and it returns a new promise, allowing for chaining multiple .catch() calls together.


// do these chores in order
// 1. walk the dog
// 2. clean the kitchen
// 3. take out the trash

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dog_walked = true;

            if (dog_walked) {
                resolve("you walk the dog");
            }
            else {
                reject("you did not walk the dog");
            }
        }, 1500);
    })
}


function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchen_cleaned = true;

            if (kitchen_cleaned) {
                resolve("you cleaned the kitchen");
            }
            else {
                reject("you did not clean the kitchen");
            }
        }, 2500);
    })
}


function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trash_taken_out = true;

            if (trash_taken_out) {
                resolve("you took out the trash");
            }
            else {
                reject("you did not take out the trash");
            }
        }, 500);
    })
}

// Calling promises in sequence

walkDog().then(value => { console.log(value); return cleanKitchen(); })
    .then((value) => { console.log(value); return takeOutTrash(); })
    .then((value) => { console.log(value); console.log("you finished all chores"); })
    .catch(error => console.log(error));
