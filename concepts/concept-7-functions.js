/*
A function is a reusable block of code designed to perform a particular task. 
In QA, we use functions to wrap common actions—like "Login," "Select Date," or "Calculate Total."

*/

// 1. Function Declaration (The Classic)
// standard way to define a function. 
// It uses the function keyword and has a name

function sumOfIntegers(a, b) {
    return a + b;
}

console.log(sumOfIntegers(10, 20)); // Output: 30

// 2. Function Expression (Anonymous)
// Here, the function has no name of its own; 
// instead, it is stored inside a variable. 
// This is useful when you want to pass a function as an argument to another function.

let sumOfNumbers = function(c, d) {
    return c + d;
};

console.log(sumOfNumbers(5, 5)); // Output: 10

// 3. Arrow Functions (ES6 "Short-hand")

// This is the most modern way to write functions. 
// In automation frameworks (Cypress/Playwright), you will see these everywhere.


// No function keyword.
// No return keyword (if it's a single line).
// No curly braces {} (if it's a single line).

// The "Fat Arrow" (=>) replaces the function keyword

let sumNum = (e, f) => e + f;

console.log(sumNum(11, 22)); // Output: 33
