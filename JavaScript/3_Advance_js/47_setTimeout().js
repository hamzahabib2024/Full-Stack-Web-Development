// setTimeout():
//      setTimeout() is a function in javaScript that allows you to schedule
//      the execution of a function after an amount of time (in miliseconds)

// Time are approximate they vary based on the workload of the javaScript runtime environment.
// time are not precise/fixed like that of stopwatch.

// syntax:
        // setTimeout(useCallback, delay);


function printHello(){
    console.log("Hello Hamza!");
}

setTimeout(printHello, 3000);  //time in milliseconds

setTimeout(function() {
    console.log("I am function 02");}, 2000);

setTimeout(()=> {console.log("I am function 03");}, 4000);

