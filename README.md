# History of javascript:

The founder of Netscape "Mark Andreessen" decide to develope a programming language for his Netscape.
In September 1995 he hired one guy called "Brendon Eich" to develope that language.
The first time when this language was developed called "MOCHA".Then change to "LIVESCRIPT" and finally it name gives to "JAVASCRIPT".
<br>
# DATA TYPES

JavaScript has 8 Datatypes:
<br>
1.String
<br>
2.Number
<br>
3.Bigint
<br>
4.Boolean
<br>
5.Undefined :- In JavaScript, undefined is a primitive data type that means a variable has been declared but not assigned a value yet.
<br>
Example:-
let a;
<br>
console.log(a); // Output: undefined
<br>
6.Null
<br>
7.Symbol
<br>
8.Object
<br>
The Object Datatype
<br>
The object data type can contain both built-in objects, and user defined objects:
<br>
Built-in object types can be:
<br>
objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
<br>
EXAMPLE:
```bash
// Numbers:
let length = 15;
let weight = 7.5;

// Strings:
let color = "red";
let lastName = "kumar";

// Booleans
let x = true;
let y = false;

// Object:
const person = {
    firstName:"Nitish", lastName:"Kumar"
};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
```

# VARIABLES

Variables are Containers for Storing Data.

JavaScript Variables can be declared in 3 ways:

1.Using var :
<br>
NOTE:
<br>
The var keyword was used in all JavaScript code from 1995 to 2015.
The let and const keywords were added to JavaScript in 2015.
The var keyword should only be used in code written for older browsers.

2.Using let
<br>
3.Using const
<br>
When to Use var, let, or const?
<br>
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

JavaScript Identifiers :
<br>
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:
<br>
Names can contain letters, digits, underscores, and dollar signs.
<br>
Names must begin with a letter.
<br>
Names can also begin with $ and _ (but we will not use it in this tutorial).
<br>
Names are case sensitive (y and Y are different variables).
<br>
Reserved words (like JavaScript keywords) cannot be used as names.

# DIALOG BOXES IN JAVASCRIPT:

There are three types of dialog box.
1.alert
   
example:
alert("messages")

2.confirm

example:
confirm("messages")

3.prompt
<br>
It returns string
<br>
example:
prompt("messages")

# STRING METHODES AND PROPERTIES.

Javascript strings are primitive and immutable: All string methods produce a new string 
without altering the original string.
<br>
String length
<br>
String charAt()
<br>
String charCodeAt()
<br>
String toUpperCase()
<br>
String toLowerCase()
<br>
String concat()
<br>
String trim()
<br>
String trimStart()
<br>
String trimEnd()
<br>
String padStart()
<br>
String padEnd()
<br>
String repeat()
<br>
String replace()
<br>
String replaceAll()
<br>
String split()
<br>
String slice()
<br>
String substring()

Example:

```bash
//string methods

//length : this is a property of string
const fullname ="nitish kumar"
const output=fullname.length;
console.log(output);

//charAt()
const message="Hi Everyone"
console.log(message.charAt(4));

//charCodeAt()
//it provide ASCIi code of character
console.log(message.charCodeAt(0));

let n="nitish kumar";
console.log(n.toUpperCase());

let m="NITISH KUMAR"
console.log(m.toLowerCase());


const str1 ="nitish"
const str2 ="kumar"
let a=str1.concat(" " , str2);
console.log(a);

//trim() method only trim the starting and ending spaces
const i ="   Hello,my name is nitish  ";
console.log(i.trim());

//it trim the starting spaces
console.log(i.trimStart());

//it trim the ending spaces
console.log(i.trimEnd());

//padStart()
const number="4578"
const ans =number.padStart(15,'*')
console.log(ans);

//padEnd()
console.log(number.padEnd(10 ,"*"));

//repeat()
const h ="hello world"
const r= h.repeat(3);
console.log(r); 

//replace()
const text = "Hello world";
console.log(text.replace("world","Everyone"));


//replaceAll()
console.log(text.replaceAll("l" ,"L"));

//split()
const word="hello,everyone"
console.log(word.split());

//slice()
const msg ="hello world"
console.log(msg.slice(0,6));

//substring()
const sub ="computer"
console.log(sub.substring(3,6));

```

# TEMPLATE STRINGS(TEMPLATE LITERALS):

Here are some main ponits about template string.
<br>
1.Template Strings use back-ticks (``) rather than the quotes ("") to define a string.
  example:
  let text = `Hello World!`;

2.Template Strings allow both single and double quotes inside a string.
  example:
  let text = `He's often called "Johnny"`;

3.Template Strings allow multiline strings.
  Example:
   let text =
  `The quick
   brown fox jumps over
   the lazy dog`;

4.Variable Substitutions
Template Strings allow variables in strings

    Example.
    let firstName = "spider";
    let lastName = "man";
    let text = `Hello ${firstName}, ${lastName}!`;

# MATH IN JAVASCRIPT

The JavaScript Math object allows you to perform mathematical tasks.
The Math object is static.All methods and properties can be used 
without creating a Math object first.

MATH INBUILT PROPERTIES:

The math properties are inbuilt in javascript.And it is also constants.
<br>
The syntax of any math properties is :
<br>
Math.property 
 <br>
 There are some math inbuilt properties.
 <br>
 ```bash
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E

```

# MATH METHODS IN JAVASCRIPT

The syntax for Math any methods is :
<br>
 Math.method(number)
 <br>
 Math.round(x)	Returns x rounded to its nearest integer
 <br>
Math.ceil(x)	  Returns x rounded up to its nearest integer
<br>
Math.floor(x)	   Returns x rounded down to its nearest integer
<br>
Math.trunc(x)	   Returns the integer part of x (new in ES6)
<br>
Math.random(x)  returns a random number between 0 (inclusive), and 1 (exclusive):
<br>
Math.min() and Math.max() :-
Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
<br>

```bash
//math object 

//round()
let m=Math.round(4.5)
console.log(m);

//ceil()
console.log(Math.ceil(4.3));

//floor()
console.log(Math.floor(4.5));

//random()
//find the random integer number between 10 t0 20
console.log(Math.floor(Math.random()*(20-10+1))+10);

//Min and Max
let num=Math.min(23,34,56,78,2,1,123,3)
console.log(num);

let maxnum = Math.max(23,3,4,4,3,12,678,56,455)
console.log(maxnum);

//sqrt()

let squareroot = Math.sqrt(16)
console.log(squareroot);

//pow()

console.log(Math.pow(3,3));

```
#  TRUTHY AND FALSY IN JAVASCRIPT

 FALSY VALUES:
 <br>
  0
  <br>
 -0
 <br>
  NaN
  <br>
  undefined
  <br>
  null
  <br>
  ''
  <br>
  0n(Bigint)

  # COMPARISION OPERATORS:

  ```bash
  //comparision operator

//1. //==(equality)
// const num1 =20
// const num2 =30
// const num3 =20
// const num4 = '20'
// console.log(num1==num2);//output:false

// console.log(num1==num3); //output:true

// console.log(num1 ==num4); //output:true ,because of implicit(automatic) coversion.

// 2.// ===(strictly equality)

//   const num1 =20
//   const num2 =30
//   const num3 =20
//   const num4 = '20'

//   console.log(num1===num4); //output:false , because === it check value and type together.here num1 store integer and num4 stores string.

// 3.// !=(not equal)
// const num1 = 23
// const num2 =23

// console.log(num1 != num2); //output: true ,because != operator give true when the number is not equal to each other and give false when the number is equal to each other.

// 4.// !==(not equal value or not equal type)
//  const num1 = 23
// const num2 ='23'

// console.log(num1 !== num2); //output: true ,because !== operator give true when  one of them is satisfied from(value or their type) and give false when  one of them is not satisfied from(value or their type)

// 5. >(greater then)

// const num1 = 23
//  const num2 =12

//  console.log(num1 > num2);

// 6.< (less than)

//7. >= (greater than or equal to)

//8. <= (less than or equal to)

```

# LOGICAL OPERATORS

Logical operators are used to determine the logic between variables or values.
<br>
Given that x = 6 and y = 3, the table below explains the logical operators:

&&	(and)	(x < 10 && y > 1) is true
<br>
when both codition is true it gives true otherwise false.
<br>	
||	(or)	(x == 5 || y == 5) is false	
<br>
if one codition is satisfied it gives true otherwise false
<br>
!	  (not)	!(x == y) is true	
<br>
<br>

# Conditional (Ternary) Operator:
<br>
JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
<br>
Syntax:
<br>
variablename = (condition) ? value1(true):value2(false) 
<br>
Example
<br>
let voteable = (age < 18) ? "Too young":"Old enough";

# DECISION MAKING (CONDITIONAL)STATEMENTS

In JavaScript we have the following conditional statements:
<br>
1. The if statement:
<br>
Use "if"  to specify a block of code to be executed, if a specified condition is true.
<br>
syntax:
<br>
if(condition)
{
  //block of execute when the codition is true.
}
<br>
2. else statement:
<br>
Use  "else"  to specify a block of code to be executed, if the same condition is false.
<br>

```bash
syntax:
if(condition)
{
  //execute block of code when condition is true.
}
else{
  //execute when condition is false
}
```
<br>
3.else if statement:
<br>
Use "else if"  to specify a new condition to test, if the first condition is false.It is use for multiple condition.
<br>
Syntax:

```bash
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

```bash
let time =prompt("enter time");
if(time<= 10)
{
 console.log("good morning");
}
else if(time<20)
{
    console.log("good day");
}
else{
    console.log("good evening");
}
```
4. switch statements:
<br>
Use "switch"  to specify many alternative blocks of code to be executed.
<br>

```bash

Syntax
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
This is how it works:

The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.


Example:

let day= parseInt(prompt("enter the day number:"))
switch(day)
{
      case 1:
        day="sunday"
        break;
      case 2:
        day="monday"
        break;
      case 3:
        day="tuesday"
        break;
      case 4:
        day="wednesday"
        break;
      case 5:
        day="thursday"
        break;
      case 6:
        day="friday"
        break;
      case 7:
        day="saturday"
        break;
      default:
        console.log("invalid day");
          break;
}
console.log(day);

```
<br>

# OBJECTS IN JAVASCRIPT

objects are non-primitive data types.It stores data as key-value pair.
<br>
 Object Syntax:
 <br>

 ```bash

let person = {
  name: "Nitish",
  age: 20,
  rollNo :36
};

```
<br>
 
# CREATING AN OBJECT :
<br>
There are three ways to creating an object.
<br> 
1.Using an object literals:
<br>
Using an object literals means defined the  object using only " {} "curly braces.
  
Example:

```bash

const student ={
    Name:"nitish",
    age:21,
    course:"bca",
    rollNo:36
};
console.log(student);

```
<br>
2. Using new keyword:
<br>

```bash
const student = new Object()
    student.Name="nitish",
    student .age=21,
    student.course="bca",
   student. rollNo=36

console.log(student);

```
3.using function (constructor function):
<br>

```bash
function student (name,age,rollno)
{
  this.name=name;
  this.age=age;
  this.rollno=rollno;
}
 //creat an object
 let stu = new student("Nitish",21,36);
 console.log(stu);

 ```

 # TO ACCESS AN  OBJECT
<br>
There are two ways to access an object:
<br>
1.using Dot Notation(.) :
<br>
2.using square bracket []
<br>
example:
<br>

 ```bash
 
//accessing object propertise. 
const student = new Object()
   student.Name="nitish",
    student .age=21,
    student.course="bca",
  student. rollNo=36
//acccessing an object with the help of Dot notation(.)
console.log(student.Name);
console.log(student.rollNo);

//accessing an object with the help of square bracket []
console.log(student["Name"]);
console.log(student["course"]);

```
# DELETE OBJECT PROPERTIES(key-value):
<br>
delete key value using "delete". 
<br>
Example:
<br>

```bash

//delete object propertise. 
const student = new Object()
   student.Name="nitish",
    student .age=21,
    student.course="bca",
  student. rollNo=36

  //delete key value 
  delete student.Name
  console.log(student);

  ```

  # <b>object.seal() in javascript</b>
  <br>
   You can modify existing properties.
  <br>
   You cannot add or delete properties.

  Example:

  ```bash
  let person = {
  name: "Nitish",
  age: 22
};

Object.seal(person);

person.age = 23;         // ✅ Allowed
person.city = "Delhi";   // ❌ Not added
delete person.name;      // ❌ Not deleted

console.log(person); // output : { name: 'Nitish', age: 23 }

```
# <b>object.freeze() in javascript</b>
<br>
You cannot add, delete, or modify any property.
Object becomes completely immutable.
<br>

Example:

```bash
let user = {
  name: "Aman",
  role: "Admin"
};

Object.freeze(user);

user.name = "Ravi";     // ❌ Not changed
user.city = "Delhi";    // ❌ Not added
delete user.role;       // ❌ Not deleted

console.log(user); // { name: 'Aman', role: 'Admin' }

```
# Arrays
<br>
Arrays is an object in javascript that is used for storing the collection of data .
<br>
characteristics :
<br>
Elements:  An array is a list of values, known as elements.
<br>
Ordered:  Array elements are ordered based on their index.
<br>
Zero indexed:  The first element is at index 0, the second at index 1, and so on.
<br>
Dynamic size:  Arrays can grow or shrink as elements are added or removed.
<br>
Heterogeneous:  Arrays can store elements of different data types (numbers, strings, objects and other arrays).
    
 WHY USE ARRAYS ?
  <br>
  <br>
  Why Use Arrays?
  <br><br>
If you have a list of items (a list of car names, for example), storing the names in single variables could look like this:
<br>
let car1 = "toyota";<br>
let car2 = "Volvo";<br>
let car3 = "BMW";<br>
However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 500?
<br>
The solution is an array!
<br>
An array can hold many values under a single name, and you can access the values by referring to an index number.
<br>

some example:

```bash
// Arrays 

// 1.how to create an arrays:
//const fruits = ["Apple","Mangoes" ,"Grapes","Banana"]
// console.log(fruits);

// 2.access an element of an arrays:
 //console.log(fruits[2]); 
 // access last element of an array:
 //console.log(fruits[fruits.length-1]);

// 3.create an empty array and asssign value:

// const fruits =[]
// fruits[0]="Mangoes"
// fruits[2]="apples"
// console.log(fruits);

// 4.create an object using "new " keyword
// const fruits = new Array("Apples" ,"Mangoes" ,"Banana") //here Arrays is an constructor
// console.log(fruits);

//5. update(changing) element in array:

// const fruits = ["Apple","Mangoes" ,"Grapes","Banana"]

// fruits[2]="PineApple"
//  console.log(fruits);

//  //for checking the length of an array
//  console.log(fruits.length);

//  //convert array to string
//  let arraytostring = fruits.toString()
//  console.log(arraytostring);

```

# ARRAYS METHODS

Basic Array Methods:
Array length  :- It is used to check the  length of an array.
<br><br>
Array toString()  :- The toString() method returns the elements of an array as a comma separated string.
<br><br>
Array at() :- It is used to check which element is present on particular index.
<br><br>
Array join()  :- The join() method also joins all array elements into a string.
<br><br>
Array pop() :- The pop() method removes the last element from an array:
<br><br>
Array push()  :- The push() method adds a new element to an array (at the end):
<br><br>
Array shift()  :-The shift() method removes the first array element and "shifts" all other elements to a lower index
<br><br>
Array unshift() :-The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
<br><br>
Array concat() :-The concat() method creates a new array by merging (concatenating) existing arrays:
<br><br>
Array copyWithin():- The copyWithin() method copies array elements to another position in an array:
<br><br>
Array flat() :-The flat() method creates a new array with sub-array elements concatenated to a specified depth.
<br><br>
flatMap() :-The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
<br><br>
Array slice() :-The slice() method slices out a piece of an array.
<br><br>
Array splice() :- The splice() method can be used to add new items to an array.
<br><br><br>
Array toSpliced() :-The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

<br>

Example:

```bash

 //ARRAYS METHODS:

 //const arr = ["Apple","Mangoes","Banana",23,45,"Pineapple"]

 //length
// console.log(arr.length);

//toString()
//console.log(arr.toString());

//at()
//console.log(arr.at(3));

//join()
//console.log(arr.join("*"));

//push()
// arr.push("kiwi");
// console.log(arr);

//pop()
// console.log(arr.pop());
// console.log(arr);

//shifts()

// console.log(arr.shift());
// console.log(arr);

//unshifts()
// console.log(arr.unshift(1));
// console.log(arr);

//concat()
// const arr2 =[12,34,56,78]
// console.log(arr.concat(arr2));

//copyWithin()
//console.log(arr.copyWithin(2,0));

```


# RIGHT WAYS  TO  COPY AN OBJECT AND ARRAYS (DEEP COPY AND SHALLOW COPY)

1. Shallow copy:
<br>
A shallow copy creates a new object or array, but copies references(address) to the nested objects — not the actual nested objects.It is not working  in case of nestead object.

<br>
 Methods that create shallow copies:

 <br>
 Arrays: slice(), concat(), [...array]

<br>
Objects: Object.assign({}, obj), { ...obj }

<br>

EXAMPLE:

```bash

//COPY AN OBJECT:

//const arr1 = ["Apple","Mangoes","Banana",23,45,"Pineapple"]

//concat()
// const arr2 =[].concat(arr1)
// console.log(arr2);

//slice()

// const arr2 = arr1.slice()
// console.log(arr1);

// arr2.push(50)
// console.log(arr2);//arr2 change

// console.log(arr1); //arr1 has been not change

//spread operator(...)

// const arr2 =[...arr1]
// arr2.push("dates")
// console.log(arr1); //not add the element in arr1 

// console.log(arr2); //add in arr2

//COPY AN OBJECT:

//object.assign()

// const student ={
//     firstname: 'nitish' ,
//     lastname: 'kumar',
//     age:21
// };
// console.log(student);

// const student2 ={}
// Object.assign(student2,student)
// student2.rollno =36
// console.log(student2);

//spread operator(...object)

// const student ={
//     firstname: 'nitish' ,
//     lastname: 'kumar',
//     age:21
// };
// //console.log(student);

// const student2 ={...student}

// student2.rollno =36

// console.log(student2);

```

2. DEEP COPY :
<br>
A deep copy duplicates everything, including nested objects — the original and the copy are completely independent.

<br>
 Easy way (works for simple data):

<br>
let deepCopy = JSON.parse(JSON.stringify(obj));


# LOOP 
<br>

```bash

//Loops
// // 1. for loop

// for(let i=1;i<=10;i++)
// {
//     let table = 5*i;
//     console.log(table);
// }


// // 2.while loop
// i=1;
// while(i<=10)
// {
//     let table =19*i
//     console.log(table);
//     i++;
// }

// // 3. do while loop

//  i=1;
//  do{
//      let table =19*i
//     console.log(table);
//     i++;
//  }
// while(i<=10)
```

# FUNCTION IN JAVASCRIPT
<br>

In JavaScript, a function is a reusable block of code that performs a specific task. Functions help you organize your code, avoid repetition, and make it more readable and maintainable.
<br>

 1. FUNCTION DECLARATION:
   <br>

   ```bash

   //declare a function
    function myfunction()
    {
       console.log("this is function declaration");
    }
    myfunction(); //function call

    ```
 2. FUNCTION EXPRESSIONS :

    ```bash

    //function expressions
    let greet =function(greet)
    {
        console.log(`${greet} Bhai`);
    }
     greet(" good morning");
     
     ```
 
 3. ARROW FUNCTION :

   ``` bash
   
   //arrow function
  let arrowFunction = (name) =>{
      console.log(`My name is ${name}`);
    }
  arrowFunction("Nitish");

  ```
4. FUNCTION WITH PARAMETERS:

```bash  

function myfunction(a,b)
{
  return a*b;
}
 let func=myfunction(3,5)
console.log(func); 

```
5. FUNCTION WITH  DEFAULT PARAMETERS:

```bash

 function myfunction(a,b=45)
{
  return a*b;
}
 let func=myfunction(3)
console.log(func);

```
6. Anonymous Function (No Name)

```bash

setTimeout(function() {
  console.log("This runs after 2 seconds");
}, 2000);

 ```

 # <b>call() method :</b>
   <br>
   The call() method in JavaScript is used to call a function with a specific this value and arguments provided one by one.
   <br>
   EXAMPLE:

   ```bash
   
  // 1. Example

// const student ={
//     name :"Nitish",
//     age:21,
//     rollno:36,
//     }
//     function printdetail(){
//         console.log(this);
//     }
// printdetail.call(student)

   //note : in this example "this" inside printdetail becomes "student" so it print all the property of object.

// Example no. 2
// const student ={
//      name :"Nitish",
//       age:21,
//      rollno:36,
//      printDetail:function()
//      {
//         console.log(this);
//      }
//     }
//     student.printDetail()

//     const student2 ={
//        name :"Nitish kumar",
//       age:22,
//      rollno:35,
//     }
//     student.printDetail.call(student2)

   ```

 #  <b>apply() method:</b>
      <br>
      apply() is a method that allows you to call a function with a specific this value and arguments passed as an array.
      <br>

      Example :

```bash
      
//apply()
function info(city, state) {
    console.log(this.name + " " + city + " " + state);
}
const student = {
    name: "Nitish"
}
info.apply(student, ["karnal", "haryana"])

```

Real Use Case of apply(): Math.max with an array:

```bash

const numbers = [5, 10, 3, 8];

const max = Math.max.apply(null, numbers);
console.log(max); // 10

Math.max normally takes arguments like Math.max(1, 2, 3).

With apply, you can pass an array instead.

```

# <b>bind() method:</b>
<br>
bind() creates a new function where this is permanently set to the value you provide.
<br>
Unlike call() or apply() which call the function immediately,
<br>
 bind() just returns a new function that you can call later.
<br>
In this method store the function in a variable that you can call it later.
<br>

EXAMPLE:

```bash 

const person = {
  name: "Nitish",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

const greetFunc = person.greet.bind(person);

greetFunc(); // Hello, Nitish

Even if we call greetFunc() later, this still refers to person.

```
<br>

# <b>CALL STACK IN JAVASCRIPT:</b>

<br>

The Call Stack is a mechanism that JavaScript uses to keep track of function calls. It follows the LIFO (Last In, First Out) principle — the last function called is the first to finish and leave the stack.
<br>
 How it Works (Simple Terms):
 <br>
1. When a function is called, it's pushed onto the stack.
<br>
2. When the function finishes, it's popped off the stack.
<br>
3. If a function calls another function, the new one is pushed on top of the stack.
<br>
4. JavaScript runs one function at a time — it’s single-threaded.
<br>

EXAMPLE:

```bash
function first()
{
    console.log("first function");
    second();
}
function second(){
    console.log("second function");
}
first();
```
<br>
Explanation of this code:
<br>
<br>
1. first() is called → pushed to stack.
<br>
2. Inside first(), it logs "first function" (this happens before sayName()).
<br>
3. Then second() is called → pushed to stack.
<br>
4. second() logs "second function" → then popped.
<br>
5. Control goes back to greet() → it has finished → popped.
<br>

# HOISTING IN JAVASCRIPT
  <br>
  Hoisting is a JavaScript mechanism where variables and function declarations are moved ("hoisted") to the top of their scope before code execution.
  <br>
Hoisting in JavaScript:
<br>
Hoisting is a JavaScript mechanism where variables and function declarations are moved ("hoisted") to the top of their scope before code execution.

1. Variable Hoisting:

 var is hoisted but initialized with undefined:

  ```bash

console.log(a); // undefined
var a = 5;
<br>

🔹 Behind the scenes:

var a;       // hoisted
console.log(a); // undefined
a = 5;

```
2. let and const are hoisted but not initialized:

```bash
console.log(b); // ReferenceError
let b = 10;

console.log(c); // ReferenceError
const c = 15;

They are in a "temporal dead zone" from the start of the block until the declaration is encountered.

```

# GLOBAL AND LOCAL SCOPE 
<br>
1.global scope:

<br>
A variable declared outside of all functions or blocks.
Accessible anywhere in the code after it's declared.
<br>

```bash

let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Accessible
}

showGlobal();
console.log(globalVar);   // Accessible

```

2. Local Scope:

<br>
A variable declared inside a function or block.
Accessible only within that function or block.
<br>

```bash

function myFunc() {
  let localVar = "I am local";
  console.log(localVar); //  Accessible inside
}

myFunc();
console.log(localVar); //  ReferenceError: localVar is not defined

```

 3. Block Scope (let & const only):

 <br>

 ```bash
{
  let x = 10;
  const y = 20;
  console.log(x, y); //  Inside block
}

console.log(x); //  ReferenceError

```
<br>
 var is not block scoped, only function scoped.

<br>

4. lexical scope :

<br>

 lexical scope also known as scope chaining . from lexical scope we get to know the variables or functions that is declared where they are accessable . 
the inner function is having its scope and scope of ancestor . and the outer function is not having scope of its child . variable declared inside child can't be accessed by its parent.

<br>

Example:

```bash

function outer() {
  let a = 10;

  function inner() {
    console.log(a); // inner can access a
  }

  inner();
}
outer();

```
# <b>CALLBACK FUNCTION</b>

<br>
A callback function is a function that is passed as an argument to another function —And is called (executed) later inside that outer function.

<br>
EXAMPLE:

```bash

function greet(name, callback) {
  console.log("Hi " + name);
  callback(); // calling the passed function
}

function sayBye() {
  console.log("Bye!");
}

greet("Nitish", sayBye);


//example with anonymous:

function greet(name,callback)
{
    console.log(" hii" ,name);
    callback();
}

greet("nitish",function saybyee()
{
    console.log("byeee");
})

```

# Higher order function:
<br>
Functions that operate on other functions — either by receiving them as arguments or by returning them — are called higher-order functions.

<br>

# <b>for of loop and for in loop</b>

<br>

```bash 

// //for of loop:-it is used for array ,string ,map,set,nodeList etc.

// const fruits =["mangoes","appple","banana"]

// for(f of fruits)
// {
//     console.log(f);
// }

// //for in loop :-for in loop is used only for object 

// const person ={
//     firstname:"nitish",
//     lastname:"kumar",
//     age:21
// }
// for(key in person)
// {
//     //console.log(key); //it only print key of an object
//     console.log(key," :",person[key]);
// }

```
# <b>forEach</b>

<br>

The forEach() method is used to iterate over arrays. It calls a callback function once for each element in the array.
<br>
Syntax:
<br>

```bash
array.forEach(function(element, index, array) {
  // code block
});

```
# <b>.map() method</b>
<br>
The .map() method is used to create a new array by transforming each element of the original array using a callback function.
<br>
 Syntax:

```bash

const newArray = originalArray.map(function(element, index, array) {
  // return new value for each element
});
<br>
element: current item in the array

index (optional): position of the item

array (optional): the entire array

```
<br>
EXAMPLE:
<br>

```bash

//example 1

//   const number=[1,2,3,4]
//  let ans=number.map( num=>num**2 )
//  console.log(ans);

//example 2:

//  const fruits =["mangoes","appple","banana"]

//  let ans=fruits.map((fruit)=>fruit.toUpperCase())
//  console.log(ans);

//example 3
// const students = [
//   { name: "Nitish", marks: 85 },
//   { name: "Amit", marks: 42 },
//   { name: "Priya", marks: 73 },
//   { name: "Rahul", marks: 60 },
// ];
// let ans= students .map(student =>
// {
//     let grade ="";
//     if (student.marks>=80) grade="A";
//     else if(student.marks>=70) grade="B"
//     else if(students.marks>=60) grade="C"
//     else grade="fail"

//       return {
//     name: student.name,
//     marks: student.marks,
//     grade: grade
//   };
// });
// console.log(ans);

```
<br>
# <b>.filter()</b>
<br>
The .filter() method is used to create a new array with only those elements that pass a certain test (condition).

Syntax:

```bash

const newArray = originalArray.filter(function(element, index, array) {
  // return true to keep the element
});

<br>
Returns a new array with filtered elements

The original array remains unchanged

```
EXAMPLE:
<br>

```bash

// // example 1
//  const fruits =["mangoes","appple","banana"]

//  let ans=fruits.filter((fruit)=>{
//   return fruit.length>=7;
//  })
//  console.log(ans);

//example 2
//  const numbers =[1,45,67,8,90,34,67,50]

//  let ans=numbers.filter((number)=>{
  
//   return number %2===0
//  })
//  console.log(ans);

```

# <b>.reduce()</b>
<br>
The .reduce() method is used to reduce an array to a single value — like a total, product, or combined result.
<br>
Syntax:
<br>

```bash

array.reduce(function(accumulator, currentValue, index, array) {
  // return updated accumulator
}, initialValue);

<br>
accumulator: total or combined value carried through the loop

currentValue: current element in the array

initialValue: starting value (optional but recommended)

```
<br>
EXAMPLE:
<br>

```bash

const number=[1,2,3,4,5]

let add = number.reduce((acc,curr)=>{
    return acc +curr
},0)
let multi = number.reduce((acc,curr) =>{
    return acc*curr
})
console.log(add);
console.log(multi);

```
















