/**
 * Creating New File
 * Executing a file
 * Comments
 * Pritning Output
 */

/** 
*** CREATING A NEW FILE ***
 * File > New File > Basics.js
 * */ 

/**
 *** EXECUTING A FILE ***
 * node <filename>
 */

/** 
 *** COMMENTS ***
 * */

// This is a comment

/*
These are also comments
ABCD
1234
XYZ
Blah Blah Blah
*/


/** 
 *** PRINTING OUTPUT (console) ***
 * log
 * info
 * error
 * warn
 * table
 * group
 * time
 * assert
 * clear
*/

/**
 * Standard Informational Logs
 * Usually appears as plain text in the console. 
*/

console.log("Hello world")

/** 
 * Custom CSS Styling
 * */

console.log(
    "%c RAINBOW MODE %c This is custom styled! ",
    "background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); color: white; font-weight: bold; padding: 5px; border-radius: 5px;",
    "color: #ff00ff; font-style: italic; font-size: 14px;"
);

/**
*** Info *** 
* In some browsers, it has a small 'i' icon.
*/ 

console.info("This is an info log");


/**
*** Error reporting and debugging *** 
* text will be red, and it often includes a small icon and a stack trace
*/ 

console.error("Help!!! Fire!! 🔥")

/**
*** Warning *** 
* text will be in yellow and often includes a small icon
*/ 

console.warn("Watch out 👀") 

/**
 *** Table ***
 * Tabular Data (Perfect for Arrays and Objects) 
 */

const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" }
];

console.table(users)

/**
 *** Grouping Logs ***
 * (Keeps your console tidy)
 */

console.group("Project Details");
    console.log("Status: Active");
    console.log("Version: 1.0.4");
    console.warn("Memory usage is slightly high.");
console.groupEnd();

/**
 *** TIME ***
 * To get the exact millisecond count.
 * It works like a stopwatch.
 * Ensure label used is the same.
 */

// start timer
console.time("MyLoop");

let total = 0;
for (let i = 0; i < 1000000; i++) {
    total += i;
}

// Stop the timer and print the elapsed time
console.timeEnd("MyLoop");

/**
 *** Assert ***
 * Only logs the message if the condition is false. 
 * It's like a mini-test for your code.
 */

let userLoggedIn = false;
// This will ONLY log an error because userLoggedIn is false
console.assert(userLoggedIn, "User is not logged in!");

/**
 *** Clear **
 * console.clear()
 */
