// async / await:
// they are the two keywords that allow you to write asynchronous code in a synchronous manner.
//               Async: it makes a function return a promise.
//               Await: it makes an async function wait for a promise to resolve.

// async does not have resolve or reject parameters.
// everything after await is placed in the event queue.
// async functions always return a promise.

// await returns the resolved value of the promise. if the promise is rejected, it throws an error.

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

async function doChores() {

    try {

        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("all the chores are done");
    }
    catch (error) {
        console.log(error);
    }

}

doChores();
