// element selectors:
//       element selectors are the methods used to target and manipulate html elements.
//  they allow you to select one or multiple html elements from the dom (Document Object Model).


//       1. document.getElementById()                 //returns single element or null if not found
//       2. document.getElementsByClassName()         //returns html collection
//       3. document.getElementsByTagName()           //returns html collection
//       4. document.getElementsByName()              //returns nodelist
//       5. document.querySelector()                  //returns single element or null if not found
//       6. document.querySelectorAll()               //returns nodelist


const myHeading = document.getElementById('my-heading');
myHeading.style.backgroundColor = 'red';
myHeading.textContent = 'hello world';
myHeading.style.textAlign = 'center';


console.log(myHeading);



const fruits = document.getElementsByClassName('fruits');
console.log(fruits);

fruits[0].style.backgroundColor = 'red';
fruits[1].style.backgroundColor = 'green';
fruits[2].style.backgroundColor = 'blue';
fruits[3].style.backgroundColor = 'yellow';
fruits[4].style.backgroundColor = 'orange';


for (const fruit of fruits) {
    fruit.style.backgroundColor = 'yellow';
}

//note: html collection has no forEach method.
// we can solve this by typecast the html collection to array


//to convert an html collection to array we use:
// 1. Array.from()
// 2. spread operator   

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = 'red';
});











// 3. document.getElementsByTagName();           //returns html collection

const h4Elements = document.getElementsByTagName('h4');
const liElements = document.getElementsByTagName('li');

console.log(liElements);
console.log(h4Elements);

h4Elements[0].style.backgroundColor = 'yellow';


for (const h4Element of h4Elements) {
    h4Element.style.backgroundColor = 'blue';
}

for (const liElement of liElements) {
    liElement.style.backgroundColor = 'lightgreen';
}

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = 'lightpink';
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = 'lightyellow';
});











// 4. document.querySelector()  //returns first element matching the selector or null if not found

const element1 = document.querySelector('.fruits');
const element2 = document.querySelector('#my-heading');
const element3 = document.querySelector('h4');
console.log(element1);
console.log(element2);
console.log(element3);

element1.style.backgroundColor = 'yellow';
element2.style.backgroundColor = 'blue';







// 5. document.querySelectorAll()  //returns nodelist

// node lists are like the html collections but with forEach method
// html collection are "live" whereas nodelist are "static"

// live means when the dom changes, the html collection will automatically update
// static means when the dom changes, the nodelist will not update


const fruits1 = document.querySelectorAll('.fruits');
console.log(fruits);

fruits[0].style.backgroundColor = 'red';
fruits1[1].style.backgroundColor = 'yellow';
fruits1[2].style.backgroundColor = 'red';
fruits1[3].style.backgroundColor = 'brown';
fruits1[4].style.backgroundColor = 'orange';

const foods = document.querySelectorAll('li');
console.log(foods);

foods[0].style.backgroundColor = 'red';
foods[1].style.backgroundColor = 'green';
foods[2].style.backgroundColor = 'blue';
foods[3].style.backgroundColor = 'yellow';
foods[4].style.backgroundColor = 'orange';

foods.forEach(food => {
    food.style.backgroundColor = 'lightblue';
});




// html collection vs nodelist
// 1. html collection is live whereas nodelist is static
// 2. html collection has no forEach method whereas nodelist has forEach method
// 3. html collection is returned by getElementsByClassName() and getElementsByTagName()
// 4. nodelist is returned by querySelectorAll()

