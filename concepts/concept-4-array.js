/**
 *** ARRAY ***
 * An array is a collection of elements 
 * An Array is a single variable used to store multiple elements. 
 * In QA, we use these to hold lists of WebElements, test data, or API response items.
 * 
 */

/**
*** Basic Anatomy & Access *** 
 * Zero-Indexed: The first element is always at position 0.
 * Mutable: You can change the contents even if the array is defined with let.  
 */

let marks = [20, 30, 40, 50, 90, 100]

// *** Accessing values using index ***
console.log(`Array Value at index 2: ${marks[2]}`) //40

console.log("Original Array:")
console.log(marks) // [20, 30, 40, 50, 90, 100]

// *** Assigning value using index ***

marks[2] = 14 // This will replace it with new value

console.log("Modified Array after > marks[index]=val)") 
console.log(marks) // [ 20, 30, 14, 50, 90, 100 ]

// *** Checking length of array ***
console.log(`Length of Array: ${marks.length}`) //6

/**
*** PUSH ***
 * Adding an element at the end
 */

marks.push(65)
console.log("Adding Element at the end with .push(val):")
console.log(marks) // [20, 30, 14, 50, 90, 100, 65]

/** 
*** POP ***
 * Removes the last element
 */

marks.pop()
console.log("Removing Element at the end with .pop():")
console.log(marks) // [ 20, 30, 14, 50, 90, 100 ]

/**
*** UNSHIFT ***
 * Add an element at the beginning 
 */

marks.unshift(10)
console.log("Adding Element at the beginning with .unshift(val):")
console.log(marks) // [10, 20,  30, 14, 50, 90, 100]

/**
*** SHIFT ***
 * Remove an element at the beginning
 */

marks.shift()
console.log("Removing an element at the beginning with .shift():")
console.log(marks)

/**  
*** INDEXOF() ***
 * Element Index > Returns index 
 * Use indexOf() when you need to know the position
 *  
*/

console.log(marks.indexOf(14)) //2

/** 
*** INCLUDES() ***
 * Check if element is present  > Returns Boolean
 * Use includes for "Is it there?" checks
 */

console.log(marks.includes(50)) //true

console.log(marks.includes(99)) //false

/**
*** SLICE *** 
 * Creating a subarray from an array 
 * (The Photocopy): It takes a copy of a section. The original array remains untouched.
 */

let testSuite = ["Login", "Search", "Checkout", "Logout", "Profile"]
let smokeSuite = testSuite.slice(0,3) // start, end exclusive of end
console.log(smokeSuite)
// output will be : [ 'Login', 'Search', 'Checkout' ]

/**
*** SPLICE ***
 * (The Surgery): It cuts into the original array, removes items, or stitches new ones in. 
 * The original array changes.
 */

console.log("Original TestSuit:") 
console.log(testSuite)

let removedTest = testSuite.splice(2,2) // start, delete how many values
console.log("Removed Test:")
console.log(removedTest)

console.log("After Removed Test:") 
console.log(testSuite)

testSuite.splice(2,0,"Payment") //start, delete how many values, string to add

console.log("After adding test:") 
console.log(testSuite)
