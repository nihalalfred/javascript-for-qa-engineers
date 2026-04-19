/**
 * Console Logging in JavaScript
 * Practical usage for debugging and QA validation
 */

// Basic logging
console.log("Hello world");

// Info log
console.info("This is an info log");

// Error log (useful for debugging failures)
console.error("Something went wrong");

// Warning log
console.warn("Potential issue detected");

// ----------------------
// Structured Data Output
// ----------------------

const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" }
];

console.table(users);

// ----------------------
// Grouping Logs
// ----------------------

console.group("Project Details");
console.log("Status: Active");
console.log("Version: 1.0.4");
console.warn("Memory usage is slightly high");
console.groupEnd();

// ----------------------
// Performance Timing
// ----------------------

console.time("LoopExecution");

let total = 0;
for (let i = 0; i < 1000000; i++) {
  total += i;
}

console.timeEnd("LoopExecution");

// ----------------------
// Assertions (Mini Test)
// ----------------------

let userLoggedIn = false;

console.assert(userLoggedIn, "User is not logged in!");
