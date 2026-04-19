/* 
*** SORTING ***

Sorting allows us to organise data in ascending or descending order. 
In automation, we often use this to verify if a "Sort by Price" or "Sort by Name" feature on a website is working correctly.

*/

// ** SORTING STRINGS **

// For strings, .sort() works exactly as you'd expect: 
// it follows alphabetical order (technically, Unicode/ASCII order).

let fruits = ["Kiwi", "Apple", "Mango", "Cherry"];
console.log("Original Array: ",fruits)

// 1. Ascending Order
let sortedFruits = fruits.sort();
console.log("Sorted Array:",sortedFruits); 
// Output: [ 'Apple', 'Cherry', 'Kiwi', 'Mango' ]

// 2. Descending Order
// Simply sort first, then reverse the array
fruits.reverse(); 
console.log("Reverse Sorted Array",fruits);
// Output: [ 'Mango', 'Kiwi', 'Cherry', 'Apple' ]

// ** SORTING NUMBERS (The "String Trap") **

// Warning: By default, JavaScript converts numbers to strings before sorting.
// It sees 100 and 25 and thinks: "1 comes before 2, so 100 is smaller than 25."
// To fix this, we use a Compare Function (a, b).

/* 
How the Compare Function Works:

If a - b is negative, a comes first.

If a - b is positive, b comes first.

If a - b is zero, nothing changes.

*/ 

let scores = [1, 3, 19, 100, 50, 25];

// INCORRECT: Sorting as strings
console.log("Incorrect Sorting as strings:",scores.sort()); 
// Output: [ 1, 100, 19, 25, 3, 50 ] ❌

// CORRECT: Ascending Order (a - b)
console.log("CORRECT: Ascending Order (a - b): ",scores.sort((a, b) => a - b)); 
// Output: [ 1, 3, 19, 25, 50, 100 ] ✅

// CORRECT: Descending Order (b - a)
console.log("CORRECT: Descending Order (b - a):",scores.sort((a, b) => b - a)); 
// Output: [ 100, 50, 25, 19, 3, 1 ] ✅

// Sorting Algorithm
// Modern JavaScript uses an algorithm called Timsort

// It is very smart and ensures that even if a small number like 25 is at the very end, 
// it will eventually be compared against the larger numbers until it "sinks" or "floats" to its correct position.

// "Tournament Organiser" vs. the "Referee"

var results = [1, 3, 19, 100, 50, 25]
console.log(scores.sort((a, b) => {
    console.log(`Comparing ${a} and ${b}`)
    return a - b
}))


/*
The sort() Method Rulebook:

Mutates: It changes the original array (it doesn't return a copy).

Default: It sorts by Unicode strings (100 comes before 2).

The Fix: Use a compare function (a, b) => a - b for numbers.

Reliability: The engine performs as many "matches" as needed until the entire list is perfectly ordered from smallest to largest.

*/
