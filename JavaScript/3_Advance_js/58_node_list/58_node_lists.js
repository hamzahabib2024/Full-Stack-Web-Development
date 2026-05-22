// NodeList : 
//           NodeList is a static collection of HTML elements by (id, class, element)
//           it can be create by using querySelectorAll() method
//           it is similar to an array, but no (map, filter, reduce ) methods
//           NodeList won't update automatically reflect changes


let buttons = document.querySelectorAll('.myButtons');
console.log(buttons);

// add html/css properties and click event listners

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         console.log(button);
//         button.textContent += " 😊";
//         button.style.backgroundColor = 'red';
//     });
// });


// mouseover and mouseout events

// buttons.forEach(button => {
//     button.addEventListener("mouseover", () => {
//         button.style.backgroundColor = "hsl(236, 100%, 40%)";
//     })
//     button.addEventListener("mouseout", () => {
//         button.style.backgroundColor = "hsl(236, 100%, 60%)";
//     })
// })




// add an element

const newButton = document.createElement('button');
newButton.textContent = "button5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

console.log(buttons);
buttons = document.querySelectorAll('.myButtons');
console.log(buttons);


// remove an element

buttons.forEach(button => {
    button.addEventListener("click", () => {
        event.target.remove();
        buttons = document.querySelectorAll('.myButtons');
        console.log(buttons);
    });
});


