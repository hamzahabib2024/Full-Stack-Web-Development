// clearTimeout():
//      clearTimeout(timeoutId) function can cancel a timeout before it triggers.

// it takes timeout Id as parameter.

let timeoutId;
function setTime(){

    timeoutId= setTimeout(function() {
                        console.log("I am function 01");}, 3000);
    console.log("setTimeout");

    
}

setTime();
clearTimeout(timeoutId);