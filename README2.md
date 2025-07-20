# Event bubbling and Event capturing

```bash

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>event bubbling And capturing</title>
</head>
<body>
      
       <div id="d1">
      <button id="btn">Click</button>
    </div>
    <script>
        // // event capturing.
        // let d=document.querySelector("#d1");
        // let button=document.querySelector("#btn");
        // d.addEventListener("click",()=>{
        //     console.log("this is an div")   
        // },true);
        // button.addEventListener("click",(event)=>{
        //     console.log("this is a button")
            
        // },true);

        //event bubbling.
        let div = document.querySelector("#d1");
        let button =  document.querySelector("#btn");

         div.addEventListener("click",() =>{
        
                console.log("this is div");       
        });
            
        button.addEventListener("click",(event) => {
           //event.stopPropagation();
            console.log("this is a button");
          });
           
     
    </script>
</body>
</html>

```

# Event Delegation in JavaScript :

Event Delegation is a technique where you attach a single event listener to a parent element instead of multiple listeners to child elements.
<br><br>
Why Use Event Delegation?
<br><br>
1.Improves performance (fewer listeners).
<br><br>
2.Useful when child elements are added dynamically.
<br><br>
3.Cleaner, more maintainable code.
<br><br>

Example:

```bash

<ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
  const ul = document.getElementById("itemList");

  ul.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      alert("You clicked: " + e.target.textContent);
    }
  });

  // Add new item dynamically
  const newItem = document.createElement("li");
  newItem.textContent = "Item 3";
  ul.appendChild(newItem);
</script>

```

# XMLHttpRequest :
<br>

The XMLHttpRequest object in JavaScript is used to interact with servers via AJAX (Asynchronous JavaScript and XML). It allows you to send and receive data without refreshing the web page.

<br>

Example:

```bash

let xhr = new XMLHttpRequest(); // Create XMLHttpRequest object

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true); // Initialize request (method, URL, async)

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Response:", xhr.responseText); // Log the response text
  } else {
    console.error("Error:", xhr.status); // Log error status
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send(); // Send the request


```

# Event loop and Callback Queue :
<br>
JavaScript is single-threaded, meaning it executes one command at a time in a single sequence. But JavaScript can handle asynchronous operations (like setTimeout, fetch, event listeners) using:
<br><br>
1.Call Stack
<br><br>
2.Web APIs (like setTimeout, DOM events)
<br><br>
3.Callback Queue (Task Queue)
<br><br>
4.Event Loop
<br><br>

Example:

```bash

console.log("Start");

setTimeout(() => {
  console.log("Callback from setTimeout");
}, 0);

console.log("End");

              output:-   Start
                         End
                         Callback from setTimeout

```
Flow of Event Loop :
<br><br>
Call Stack: Where code is executed.
<br><br>
Web APIs: Handle async operations (like timers).
<br><br>
Callback Queue: Stores callbacks (e.g., from setTimeout).
<br><br>
Event Loop: Constantly checks:
<br><br>
If Call Stack is empty → moves first function from Callback Queue to Call Stack.
<br><br>

# Synchronous JavaScript :
<br>
Here is the main points how to work Synchronous JavaScript.
<br><br>
1.Runs line by line.
<br><br>
2.One task at a time — each line must finish before the next runs.
<br><br>
3.Blocks the code execution if a ta
<br><br>

# Asynchronous JavaScript:
<br>
1.Some tasks dont block the next line.
<br><br>
2.Used for delays, API calls, file loading, etc.
<br><br>
3.Uses callbacks, promises, or async/await.
<br><br>

Example:

```bash

console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 2000); // runs after 2 seconds

console.log("End");

                      output:-
                      Start
                      End
                      Inside setTimeout

```
 # Callback Hell in JavaScript?
 <br><br>
Callback Hell happens when you nest too many callback functions, especially in asynchronous code — making it hard to read, understand, and debug.

Its also called the “Pyramid of Doom” because of the deeply nested structure.
<br><br>
Example:

```bash

setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");

      setTimeout(() => {
        console.log("Step 4");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

```

# Promise

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.
<br><br>
It has three states:
<br><br>
pending :- the initial state, neither fulfilled nor rejected.

fulfilled :- the operation completed successfully.

rejected :- the operation failed.

# why use Promise:

Promise use in JavaScript because before the developers use callback function ,which often led to callback hell.So,Promise used for the solution of callback hell.

<br>

Syntax:

```bash

let promise = new Promise(function(resolve, reject) {
  // asynchronous operation
  if (/* success condition */) {
    resolve("Success result");
  } else {
    reject("Error reason");
  }
});

```
Example:

```bash


const p = new Promise( (resolve,reject)=>{

resolve('promise  resolved')  

reject('promise rejected')

//Note :- If resolve and reject method is call one after other in this condition the method which is called first will be executed.

})

p.then((data)=>{
    console.log("it runs when promise full filled");  // It runs when promise resolved
})
.catch(()=>{
    console.log("it run when promise rejected"); //It runs when  promise is rejected
}).then(()=>{
    console.log("Even when the promise is rejected this will execute.It also executes when promise s fullfilled");
}).finally(()=>{
    console.log('It always executes');
})

```

# fetch API:

The Fetch API in JavaScript is used to make HTTP requests (like GET, POST, PUT, DELETE,PATCH) to servers. Its built into modern browsers and provides a cleaner and more powerful way to fetch resources than the older XMLHttpRequest.
<br>
Note: fetch returns a Promise.
<br><br>

Syntax:- 

```bash

fetch(url, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

  ```

  Example:- Using GET request  

  ```bash

  fetch('https://dummyjson.com/products')

.then(res => res.json()) //It convert response to json
.then(data => console.log(data)) //it print the data that receive from server

.catch(error => console.log('errorrr')) //It runs when api not working or not send data


```

Example :- Using POST request

```bash

fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'BMW Pencil',
    /* other product data */
  })
})
.then(res => res.json())
.then(console.log);

```

 # async / await in JavaScript 

The async / await syntax is a modern way to handle Promises in JavaScript. It makes asynchronous code look and behave more like synchronous code, improving readability and maintainability.

# What is async?

The async keyword is used to declare a function that always returns a Promise.

Example:

```bash

async function greet() {
  return "Hello!";
}

greet().then(msg => console.log(msg)); // Output: Hello!

```

# What is await?

await pauses the execution inside an async function until the Promise is resolved or rejected.

Example:

```bash

async function fetchData() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  let data = await response.json();
  console.log(data);
}

```

# optional chaining (?.):

Optional Chaining is a safe way to access deeply nested object properties without causing errors if a property is undefined or null.

<br>

Syntax:

```bash

object?.property
object?.[expression]
object?.method?.()

```

 Problem It Solves:
<br>
Without optional chaining:

```bash

let user = {};
console.log(user.address.city); //  Error: Cannot read property 'city' of undefined

```

With optional chaining:

```bash

console.log(user.address?.city); //  Output: undefined (no error!)

```

Example: Nested Object

```bash

let user = {
  name: "Nitish",
  address: {
    city: "Delhi"
  }
};

console.log(user.address?.city);       //  Delhi
console.log(user.address?.pincode);    //  undefined (no error)
console.log(user.contact?.phone);      //  undefined (no error)

```

# ES6  Modules(ECMAScript 2015):

ES6 Modules allow JavaScript to support modular programming — breaking code into separate files and importing/exporting them as needed.
<br>

# Rules to Remember :

1.Use type="module" in HTML(it use in script tag) to use import/export in browser.
<br><br>
2.In Node.js, use .mjs extension or set "type": "module" in package.json.
<br><br>
3.You cannot use import/export inside functions or conditionals.
<br><br>
4.import is hoisted and runs before the rest of the code.
<br><br>
5.Modules are singletons - if you import the same module multiple times, it’s only evaluated once.
<br><br>

#  Importing

  Types of Importing:

  1.Importing Named Exports
  <br><br>
  When you export variables, functions, or classes using their names, you can import them using curly braces {}.
   <br>

  









