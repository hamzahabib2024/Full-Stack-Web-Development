// Class list:
//           Class list is an element property in javaScript used to interect with an element's
//           list of classes (css classes)
//           it allows you to make reusable classes for many elemeents across your webpage.

// add()
// remove()
// toggle(Remove if present , Add if not present)
// replace (Replace old class with new class)
// contains (Check if class is present)


const myButton = document.getElementById("myButton")
const myH1 = document.getElementById("myH1")

// myButton.classList.add("enabled");
// myH1.classList.add("enabled");



// myButton.classList.remove("enabled");
// myH1.classList.remove("enabled");


myButton.classList.toggle("enabled");
myH1.classList.toggle("enabled");

// now add the hover class


myButton.addEventListener("mouseover", () => {
    event.target.classList.add("hover");
});
myH1.addEventListener("mouseover", () => {
    event.target.classList.add("hover");
});



myButton.addEventListener("mouseout", () => {
    event.target.classList.remove("hover");
});
myH1.addEventListener("mouseout", () => {
    event.target.classList.remove("hover");
});


myButton.addEventListener("click", () => {

    if (myButton.classList.contains("enabled")) {
        myButton.classList.replace("enabled", "disabled");
        event.target.textContent += "☀️";

    }
    else {
        myButton.classList.replace("disabled", "enabled");
    }


});




