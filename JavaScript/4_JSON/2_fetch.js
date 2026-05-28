// fetch() returns a promise that resolves to the Response object representing the response to the request.
// The Response object contains the status of the response, headers, and the body of the response.
// The body of the response can be accessed using the .json() method, which returns a promise that resolves to the parsed JSON data.

// json() method is used to parse the response body as JSON and returns a promise that resolves to the parsed JSON data.

fetch("person.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching JSON:", error);
  });


  // response.json() is a method that parses the response body as JSON and returns a promise.


  fetch("people.json")
     .then((response)=> response.json())
     .then((data)=> {console.log(data);})
     .catch((error)=> {console.error("Error fetching JSON:", error);});



// it is like few steps process
// 1.
const response = await fetch("person.json");
// 2.
const data = await response.json();
// 3.
console.log(data);