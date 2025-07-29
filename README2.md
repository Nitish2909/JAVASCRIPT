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


  # Exporting

There are two types of exports:

1. Named Export
You can export multiple things from a file :

```bash

//fileName -> module1.js
export const info ={
    firstName: 'Nitish',

    lastName: 'Kumar',

    address:{
        state:"Haryana",
        city:'Karnal',

        pinCode: 132001
    }
}

```
2. Default Export
You can export only one default thing per file:

```bash
// greet.js
export default function greet(name) {
  console.log(`Hello, ${name}!`);
}

```

#  Importing

  Types of Importing:

  1.Importing Named Exports
  <br><br>
  When you export variables, functions, or classes using their names, you can import them using curly braces {}.
   <br>

   ```bash

//fileName -> module1.js
export const info ={
    firstName: 'Nitish',

    lastName: 'Kumar',

    address:{
        state:"Haryana",
        city:'Karnal',

        pinCode: 132001
    }
}


// import module1.js in module.js file:

import { info } from "./module1.js";

console.log(info);

```

you can rename also while importing:

``` bash

import {  module1 as module2 } from './math.js';

```

# factory function in javascript

A factory function in JavaScript is a function that returns a new object every time it is called. It’s a simpler alternative to using classes or constructor functions and is often used when you want to encapsulate object creation logic.

Example:-

```bash

function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
    },
  };
}

const user1 = createUser("Nitish", 20);
const user2 = createUser("Kumar", 21);

user1.greet(); // Hi, I'm Nitish and I'm 25 years old
user2.greet(); // Hi, I'm Kumar and I'm 30 years old

```

# constructor function in javascript

In JavaScript, a constructor function is a special function used to create and initialize objects. When you call it with the new keyword, it constructs a new object, sets this to point to that object, and returns it.
<br><br>
 Notes:-
 <br>
1.Constructor function names usually start with a capital letter by convention.
<br><br>
2.Always use new when calling a constructor. Without new, this will refer to the global object (or undefined in strict mode).


```bash

function Person(name, age){
    this.name = name;
    this.age = age;
}
 let Person1 = new Person('nitish',21);

 console.log(Person1.name);
 console.log(Person1.age);

 ```

 Explanation:-

<br>
1.function Person(name, age) — This is a constructor function.
<br>
2.this.name = name — Sets the name property on the new object.
<br>
3.this.age = age — Sets the age property.
<br>
4.new Person('nitish', 21) — Creates a new object with those values.


# Prototype in JavaScript?

In JavaScript, prototype is a mechanism by which objects inherit properties and methods from other objects.
<br>
JavaScript uses prototypal inheritance instead of classical inheritance (like in Java or C++). Every object in
<br>
 JavaScript has a [[Prototype]] (an internal reference), which links to another object — called its prototype.

 <b>How it works:</b> 

1.When you try to access a property or method on an object:
<br>
2.JS will first look for it on the object itself.
<br>
3.If not found, it will look at the object’s prototype.
<br>
4.This continues up the prototype chain until it finds it or reaches null.
<br>

Example:

```bash

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person("Nitish");

person1.sayHello();  // Output: Hello, my name is Nitish

```

# classes in javascript

A class is a blueprint for creating objects with shared properties and methods.
<br>
JavaScript introduced the class syntax in ES6 (2015) to make object-oriented programming 
<br>
easier and more readable — but under the hood, it still uses prototypes.

Example:

```bash

class Person {
    constructor(name,age) // Here constructor is a special method used creating and initializing an object
     {
        this.name=name; //here this refer to person
        this.age=age;
     }
greet()
{
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
}
}
const p1 =new Person('Nitish' ,21)  //here person is stored in p1 like this(p1:person)
console.log(p1.name ,p1.age);
p1.greet();


```

#  Private and Public Fields in JavaScript Classes:

<b> 1. Public Fields (Default) :- </b> 
 <br><br>
 Accessible from anywhere (inside or outside the class).
<br><br>
 Declared normally, no special symbol.

 ```bash

 class Person {
  name = "Default"; // public field

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

const p = new Person();
p.name = "Nitish";
p.greet(); // Hello, I am Nitish

```

<b> 2. Private Fields (Using #):</b>
<br>
Can only be accessed within the class.
<br>
Prefixed with #
<br>
Not accessible from outside, even via this


Example:

```bash
class Person {
    #age //private field
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    greet() {
        console.log(`My name is ${this.name} and I am ${this.#age} years old`);
    }

}

const p1 = new Person('Nitish', 21)
p1.greet();

```

# static Keyword in JavaScript:
<br>
The static keyword in JavaScript is used to define static methods or properties for a class.

<b> What is a Static Method/Property?</b>
<br>
Belongs to the class itself, not to instances.
<br>
Called using the class name, not the object.

Example:

```bash


class Person {
    static Add(a, b) {
        return a + b;
    }

}
console.log(Person.Add(12, 34))

```

# Getters and Setters in javascript:

In JavaScript, getters and setters are special methods that provide a way to access and update the properties of an object. They allow you to control how values are retrieved or set on an object, making your code more robust and encapsulated (like in OOP).

Example:

<b>1. Getters and Setters in object</b>

```bash

const person = {
  firstName: "Nitish",
  lastName: "Kumar",
  
  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // Setter
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // Nitish Kumar

person.fullName = " Rupesh Kumar";
console.log(person.firstName); // Rupesh
console.log(person.lastName);  // Kumar

```

<b>2. Getters and Setters in classes</b>

```bash
class info {
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    
     get fullname(){
        return `${this.firstName} ${this.lastName}`
     }

     set fullname(name){
        let parts = name.split(' ')
         this.firstName =parts[0]
         this.lastName=parts[1]
     }
}
const user1=new info('Nitish','kumar')

console.log(user1.fullname);

 info.fullname="Rupesh kumar"

console.log(info.fullname);

```

# Destructring :

```bash

// array Destructuring

const arr = [1,23,4,5,6,8];
const [,,,a] = arr;
const [b] = arr;
console.log(a); // 5
console.log(b);  // 1 

// Here "a and b " are just variable. 

const {3:a} = arr;
console.log(a) ; // 5 
// this is done because array is an object internally.

// Object Destructuring

const obj = {
        name:"Hero",
        age:12,
        address:{
          city:"Mumbai",
          state:"Maharastra"
        }
    }
  
const {age} = obj;
console.log(age) ; //12

// If we want to use another "variable" name to access property 
const {name:username , age: a} = obj;
console.log(username,a)

// How to destructure nested object or multilevel Destructuring . 

const {address:{city}}= obj;
console.log(city); // Mumbai



// We can also destructure the object and array in function parameter. 


```

# Difference  between function and methods:

  Method : Function defined in object or class.
   <br>
  Example:

  ```bash

let user = {
  name: "Nitish",
  greet: function() {
    return ` Hello, ${this.name}`
  }
};

console.log(user.greet()); // Hello, Nitish

```
 
Function : Funtion defined outside the object or class.
<br><br>

Example:

```bash

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Nitish")); // Hello, Nitish

```

# How to Block JS thread :

javascript is single thread.

```bash

// without using setTimeout and setInterval 

const starttime = Date.now() ;
let currenttime = starttime
while(starttime + 2000 > currenttime){
  console.log("data")
  currenttime = Date.now();
}

// This code blocks main thread for 2 second.
// code runs in synchronous mode

// XMLHttpRequest can be executes in both synchronous mode and asynchronous code.

const xhr = new XMLHttpRequest();
xhr.open('GET','https://dummyjson/posts',false); // synchronous mode 
xhr.open('GET','https://dummyjson/posts'); // asynchronous mode 

```



# IIFE :

IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that runs as soon as it is defined.If you want to create simple function to IIFE function then just wrap the  function in () and then call using ();
<br><br>
<b>Why use IIFE?</b>

1. Avoid polluting the global scope
→ Variables inside IIFE are private.
<br><br>
2.Create a private scope
→ Useful in modular code or closures.
<br><br>
3.Run code once
→ Initialization logic that only runs one time.
   

Example:- 
<br>
There are some way to create an IIFE.

```bash

// // 1. using simple function

// (function print(){
//     console.log("This is an Example of IIFE");
// })();


// // 2. using Arrow function

// (()=>{
//     console.log("This is an Example of IIFE");
// })();

// // 3.

// (function print(){
//     console.log("This is an Example of IIFE");
// }());

// // 4. using +

// +function print(){
//     console.log("This is an Example of IIFE");
// }();

// // 5. using void

// void function print(){
//     console.log("This is an Example of IIFE");
// }();

// // 6.

// let f=function (){
//     console.log("This is an Example of IIFE");
// }();

// // 7.

// !function (){
//     console.log("This is an Example of IIFE");
// }();

```








  


  









