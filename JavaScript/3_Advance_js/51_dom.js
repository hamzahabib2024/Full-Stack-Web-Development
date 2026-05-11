// DOM: Document Object Model
//     DOM is a javaScript object{} that represents the page you see in the web browser.
//     and it provides you with an API to interect with it.

//Web broswer constructs the dom when it loads an html document, and structures all the elements
// in a tree like representation called the dom tree.

// JavaScript can access the dom to dynamically change the content, structure, and style
// of an html page.

console.log(document);
console.dir(document);

// we can dynamicall change the title as:
document.title = "Hello DOM";

// we can change the page background color as:
document.body.style.backgroundColor = "hsla(120, 8%, 16%, 1.00)";

const username = "Hamza";
const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent = "Welcome " + username;
welcomeMsg.textContent += username === "" ? `Guest` : username;

document.querySelector("#welcome-msg").style.color = "white";




