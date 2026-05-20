// event listener 

//               eventListener listen for specific events to create interactive web pages.
//           events: keydown, keyup, keypress
//           document.addEventListener("event", function)




// document.addEventListener("keydown", (event) => {
//     if (event.key === "ArrowDown") {
//         console.log(`key down`);
//     }
// });

// document.addEventListener("keyup", (event) => {
//     console.log(`key up = ${event.key}`);
// });




// example 02


const myBox = document.getElementById("myBox");

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                myBox.style.backgroundColor = "tomato";
                myBox.textContent = "🤣";
                console.log(`key up`);
                break;
            case "ArrowDown":
                y += moveAmount;
                myBox.style.backgroundColor = "lightgreen";
                myBox.textContent = "😎";
                console.log(`key down`);
                break;
            case "ArrowLeft":
                x -= moveAmount;
                myBox.style.backgroundColor = "lightyellow";
                myBox.textContent = "🤑";
                console.log(`key left`);
                break;
            case "ArrowRight":
                x += moveAmount;
                myBox.style.backgroundColor = "lightblue";
                myBox.textContent = "😍";
                console.log(`key right`);
                break;
        }
        myBox.style.top = y + "px";
        myBox.style.left = x + "px";
    }
});
