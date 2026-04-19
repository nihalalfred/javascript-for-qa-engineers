/**
 * Variables in JavaScript
 * Covers: var, let, const, types, scope
 */

// ----------------------
// Basic Types
// ----------------------

let count = 1;             // number
let firstName = "Nihal";   // string
let isActive = true;       // boolean
let data = null;           // intentional empty value
let value;                 // undefined

console.log(typeof count); // "number"

// ----------------------
// Boolean Negation
// ----------------------

let isVisible = false;

console.log(!isVisible); // true
console.log(isVisible);  // false

// ----------------------
// var vs let vs const
// ----------------------

var tool = "Cypress";
let language = "JavaScript";

if (true) {
  var tool = "Playwright";      // overwrites (function scoped)
  let language = "TypeScript";  // new variable (block scoped)

  console.log("INSIDE BLOCK");
  console.log(`tool: ${tool}`);        // Playwright
  console.log(`language: ${language}`); // TypeScript
}

console.log("OUTSIDE BLOCK");
console.log(`tool: ${tool}`);        // Playwright
console.log(`language: ${language}`); // JavaScript

// Reassignment
language = "Java";   // allowed
tool = "Appium";     // allowed

// Redeclaration (only var allows this)
var tool = "XCUITest";

console.log(`tool: ${tool}`);        // XCUITest
console.log(`language: ${language}`); // Java


// Example: Test config
const BASE_URL = "https://api.test.com";

let retryCount = 0;

if (!BASE_URL) {
  console.error("Missing base URL!");
}
