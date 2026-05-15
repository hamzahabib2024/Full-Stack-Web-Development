// DOM Navigation:
//                  dom navigation is the process of navigating through the structure of an html document using javascript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children
// .childNodes


//------------------------- .firstElementChild &  .lastElementChild  --------------------------

const fruitList = document.getElementById("fruits");
const firstFruit = fruitList.firstElementChild;
const lastFruit = fruitList.lastElementChild;
console.log(firstFruit);
console.log(lastFruit);

const vegetableList = document.getElementById("vegetables");
const firstVegetable = vegetableList.firstElementChild;
const lastVegetable = vegetableList.lastElementChild;
console.log(firstVegetable);
console.log(lastVegetable);

// we can use the querySelectorAll to get all the elements

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ul => {
    const firstChild = ul.firstElementChild;
    firstChild.style.backgroundColor = "lightgreen";
});


// ------------------------ .nextElementSibling & .previousElementSibling -----------------------

const vegetableList2 = document.getElementById("vegetables");
const nextVegetable = vegetableList2.nextElementSibling;
const previousVegetable = vegetableList2.previousElementSibling;
nextVegetable.style.backgroundColor = "lightpink";
previousVegetable.style.backgroundColor = "red";


const element = document.getElementById("onion");
const nextElement = element.nextElementSibling;
const previousElement = element.previousElementSibling;
nextElement.style.backgroundColor = "lightpink";
previousElement.style.backgroundColor = "red";


//----------------------- .parentElement & .children --------------------------

const element2 = document.getElementById("ice_cream");
const parent = element2.parentElement;
parent.style.backgroundColor = "orange";

const children = parent;
children.style.backgroundColor = "blue";

const element3 = document.getElementById("vegetables");
const children2 = element3.children;
children2[0].style.backgroundColor = "yellow";
children2[1].style.backgroundColor = "yellow";
children2[2].style.backgroundColor = "yellow";
children2[3].style.backgroundColor = "yellow";


