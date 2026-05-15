// Example  01:

// we  will do in 3 steps:
// step 1: create the element
const newH1 = document.createElement("h1");
// step 2: add attributes and properties

newH1.textContent = "I like Mutton to eat";

// step 3: append element to the DOM

// document.body.append(newH1);
document.body.prepend(newH1);
newH1.id = "myH1";

newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// to add the h1 in the box 1 or 2
// document.getElementById("box1").append(newH1);
// document.getElementById("box2").append(newH1);
// document.getElementById("box3").append(newH1);
// document.getElementById("box4").append(newH1);

// document.getElementById("box4").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);



// let there is no id's of the box elements so 
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]);





//remove html element

document.body.removeChild(newH1);


// Example  02:

// Add element
const newLi = document.createElement("li");
newLi.textContent = "grape";
newLi.id = "grape";
newLi.style.backgroundColor = "yellow";
newLi.style.fontWeight = "bold";

// add
// document.getElementById("fruits").append(newLi);
const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newLi, banana);



//change

const listItem = document.getElementById("banana");
listItem.textContent = "orange";


// remove

const removeItem = document.getElementById("apple");
removeItem.remove();

