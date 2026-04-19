// 1. Can a JavaScript object hold a function as a property? Explain with an example.

const { resolve } = require("path")
const { promiseHooks } = require("v8")

const person = {
name: "Nihal Alfred!",
age: 30,
greet: function(){
console.log("Hello, I am " + this.name)
}
}

person.greet()

// 2. What are anonymous functions in JavaScript? Define their syntax and implementation.

const greetMessage = function(name){
    console.log("Hello World " + name)
}

console.log(greetMessage("Nihal"))

// 3. What is the difference between var, const and let? Explain with an example.

function varExample(){
var x = 1
x = 5 // allowed
if(true){
var x = 6 // allowed
console.log("var x inside if block: "+ x)
}
console.log("var x outside if block: " +x)
}

varExample()

function letExample(){
let x = 1
//let x = 4 this is not allowed
if(true){
let x = 2 // allowed
// let x = 5 this is not allowed
console.log("let x inside if block: "+ x)
}
console.log("let x outside if block: " + x)
}

letExample()


function constExample(){

const x = 5

if(true){
    const x = 6
    console.log("inside if block const x: " + x)
}
//x = 9 // this is not allowed. Error: Assignment to constant variable.
console.log("outside if block const x: " + x)

}

constExample()

//Where are the push, pop, slice, shift and unshift methods used when assessing array elements?

//Defining an Array
const fruits = ["Apple","Kiwi","Orange","Mango","Gauva","Cherry","Banana","Dates"]

// Accessing an element in an array using its index
console.log(fruits[0]) //Apple
console.log(fruits[4]) //Gauva

// Adding an element to an array
fruits.push("Watermelon") // adds to the end of the array.
console.log(fruits)

// output:
// [
//   'Apple',      'Kiwi',
//   'Orange',     'Mango',
//   'Gauva',      'Cherry',
//   'Banana',     'Dates',
//   'Watermelon'
// ]

// Remove the last element in an array

const lastfruitdeleted = fruits.pop()
console.log(lastfruitdeleted) // Watermelon
console.log(fruits)

//output
// [
//   'Apple',  'Kiwi',
//   'Orange', 'Mango',
//   'Gauva',  'Cherry',
//   'Banana', 'Dates'
// ]

// Add an element at the beginning of the array

fruits.unshift("JackFruit")
console.log(fruits)

//output

// [
//   'JackFruit', 'Apple',
//   'Kiwi',      'Orange',
//   'Mango',     'Gauva',
//   'Cherry',    'Banana',
//   'Dates'
// ]

// Remove the first element of an array

fruits.shift()
console.log(fruits)

//output
// [
//   'Apple',  'Kiwi',
//   'Orange', 'Mango',
//   'Gauva',  'Cherry',
//   'Banana', 'Dates'
// ]


// Finding the index of an element

console.log(fruits.indexOf("Cherry")) // 5

// Remove an element by index

const removedFruit = fruits.splice(1,1) // (1: start of index, 1: end of index)
console.log(removedFruit) // ['Kiwi'] which is index 1 of the array

//If you want to remove only one element and keep rest of the array

const arrayWithOnlyOneRemovedIndex = fruits.splice(2)
console.log(arrayWithOnlyOneRemovedIndex) // [ 'Mango', 'Gauva', 'Cherry', 'Banana', 'Dates' ]

// Iteration over an array

arrayWithOnlyOneRemovedIndex.forEach((fruit,index)=> {
    console.log(`${index}: ${fruit}`)
})

//output
// 0: Mango
// 1: Gauva
// 2: Cherry
// 3: Banana
// 4: Dates


// Is JavaScript Asynchronous? Prove with an example

console.log("I am the 1st")
console.log("I am the 2nd")
console.log("I am the 3rd")
console.log("I am the 4th")

setTimeout(() => {
console.log("I am the 5th")
}, 2000);
console.log("I am the 6th")

//output

// I am the 1st
// I am the 2nd
// I am the 3rd
// I am the 4th
// I am the 6th >> this was executed without waiting for the 5th line to complete.
// I am the 5th >> this wait for the timeout to complete first before executing though it was the 5 line in sequence.

// What are callback functions in JavaScript?

// A callback function is a function that is passed as an argument to another function and is executed after some operation has
// been completed. Callbacks are often used for asynchronous operations.


function fetchData(callback){
    setTimeout(() => {
        console.log("Data Fetched")
        const data = "Sample Data"
        callback(data)
    }, 2000);

}

function processData(data){
    console.log("Processing Data: ", data)
}

function modifyData(data){
    console.log("Modified Data: ", data)
}

fetchData(processData)
fetchData(modifyData)

//output

// Data Fetched
// Processing Data:  Sample Data
// Data Fetched
// Modified Data:  Sample Data
