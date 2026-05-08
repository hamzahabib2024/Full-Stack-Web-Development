// Closures: 
//      A closure is a function defined inside of another function,
//      The inner function has the access to the variables and scope of the outer function.

// They allow for private variables and state maintenance.
// Closures are used in JS frameworks : like : React, Vue, Angular

// simple intuation of closures are function inside another function

function outer(){

    let message = "Hello Hamza!";

    function inner(){
        console.log(message);
    }

    inner(); // without this line the message will not printed
}

message = "Hello Umar"; //  this will not change the message that is inside the function.
// This "message" seperate variable.

outer();

// Example : 02
// Property: A closure can maintain the state of the program

function Counter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        console.log(`The current count is : ${count}`);
    }

    return {increment:increment, getCount:getCount}; // this will return the increment object
}


const counter = Counter();

counter.increment();
console.log(counter.count); // we can't access the variables inside the function from outside

counter.increment();
counter.increment();
counter.increment();

counter.getCount();

// Example : 03
// closure for game to keep the track of points

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}points`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}points`);
    }
    function getScore(){
        return score;
    }

    return {increaseScore:increaseScore, 
            decreaseScore:decreaseScore, 
            getScore:getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(7);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()} points`);