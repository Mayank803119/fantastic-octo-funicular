// 1. ways to print in JavaScript
// console.log("Hello World");
// alert("me");
// document.write("this is a document write")

// 2. JavaScript console API
// console.log("Hello World", 10 - 25, "Another log");
// console.warn("this is an Warning");
// console.error("This is an error");

// 3. JavaScript Variables
// What are variables? - Containers to store data values

var number1 = 34;
var number2 = 56;
// console.log(number1 + number2);

// 4. Data types in JavaScript
// numbers
var num1 = 455;
var num2 = 56.76;

// string
var str1 = "This is a strimg";
var str2 = 'This is also a string';

// objects
var marks = {
    ravi: 34,
    shubham: 54,
    mayank: 85.525
}
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);
/*
At a very high level, there are a two types of data in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, Symbol
2. Reference data types: Arrays and Objects
*/

var arr = [1, 2, "mayank", 4, 5]
// console.log(arr);
var a = 100;
var b = 10;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operators
var c = b;
// c += 2;
// c -= 2; c = c - 2;
// c *= 2;
// c /= 2;          
// console.log(c);

// Comparsion Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// Logical operators

// Logical And
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// // Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical not
// console.log(!false);
// console.log(!true);

// Function of JavaScript
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript
/*
var age = 41;
// Single if statement
if(age > 18){
    console.log('you can drink rasna water');
}
// if - else statement
// if(age > 18){
//     console.log('you can drink rasna water');
// }
// else{
//     console.log('you cannot drink rasna water');
// }

age = 25;
// if-else Ladder
if(age > 32){
    console.log('you are not a kid');
}
else if(age>26){
    console.log('bachhe nhi rhe');
}
else if(age>22){
    console.log('yes bachhe nhi rhe');
}
else if(age>18){
    console.log('18 bachhe nhi rhe');
}
else{
    console.log('bachhe rahe');
}
console.log('End of ladder');
*/

var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++);{
//     if(i==2){
//         // break;
//         continue;
//     }
// console.log(arr[i])
// }



// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemclass = document.getElementsByClassName("container");
// console.log(elemclass);
// elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-success");
// console.log(elem.innertext);
// console.log(elem.innerHTML);

// console.log(elemclass[0].innertext);
// console.log(elemclass[0].innerHTML);
// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes an element 

// Selecting using query
// sel = document.querySelector('.container')
// console.log(sel);
// sel = document.querySelectorAll('.container')
// console.log(sel);

// function clicked(){
//     console.log('The button was clicked');
// }
// window.onload = function(){
//     console.log('The document was clicked');
// }
// Events in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>"
//     console.log('click on container');
// })
// firstContainer.addEventListener('mouseover', function(){
//     console.log('mouse on container');
// })
// firstContainer.addEventListener('mouseout', function(){
//     console.log('mouse out of container');
// })

// firstContainer.addEventListener('mouseup', function(){
//     console.log('mouse up when clicked on container');
// })
// firstContainer.addEventListener('mousedown', function(){
//     console.log('mouse down when clicked on container');
// })

// Arrow Functions
// summ = (a,b)=>{
//     return a+b;
// }
// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set Interval fired</b>"
//     console.log('I am your log')
// }
// SetTimeout and setinterval 
// setTimeout(logKaro, 2000); 
// clr = setInterval(logKaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// JSON





