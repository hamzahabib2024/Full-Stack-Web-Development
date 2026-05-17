// Event Listener:
//                eventListener listen for specific events to create interactive web pages
//            events: click, mouseover, mouseout,
//            methods: .addEventListener(event, callback)


// example of click event:

const myBtn = document.getElementById("myBtn");
const myBox = document.getElementById("myBox");

myBtn.addEventListener("click", () => {
    // event.target.style.backgroundColor = "red";
    // event.target.textContent = "OUCH! 😣";
    myBox.style.backgroundColor = "red";
    myBox.textContent = "OUCH! 😣";
});



// example of mouseover event:

// const myBox2 = document.getElementById("myBox");
myBtn.addEventListener("mouseover", () => {
    // event.target.style.backgroundColor = "yellow";
    // event.target.textContent = "DON'T DO IT! 😠";
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "DON'T DO IT! 😠";
});


// example of mouseout event:

// const myBox3 = document.getElementById("myBox");
myBtn.addEventListener("mouseout", () => {
    // event.target.style.backgroundColor = "green";
    // event.target.textContent = "Click me 😊";
    myBox.style.backgroundColor = "green";
    myBox.textContent = "Click me 😊";
});





