# Event bubbling and Event capturing
<br>
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
<br><br>
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










