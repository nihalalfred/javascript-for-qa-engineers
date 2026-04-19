/*
🧪 The Lab: "The E-Commerce Auditor"
The Scenario: You are testing a shopping website. 
You have an array of product prices from a search result page, 
but the data is "dirty"—it contains some zero values (bugs) and some very high prices.

The Starting Data:

let prices = [0, 150, 40, 2500, 0, 85, 120]

Step 1: Remove the "Zero" Bug (Start)
The first price in the list is 0. This is a known bug.
Remove the first element from the array so it doesn't break your math.

Step 2: Add a Missing Price
A new item was just loaded at the beginning of the list with a price of 99.

Step 3: Check for Luxury Items
Your test requirement says: "If any item costs 2500, mark the suite as 'High Value'."
Task: Check if 2500 is in the list and log: "High Value Found: [true/false]".

Step 4: Find the Luxury Item's Position
You need to tell the script exactly where that expensive item is so it can click it.

Step 5: The "Budget" View (Subset)
The user clicked a filter for "Mid-Range Items." Create a new array called midRange containing the items from index 1 to 4.

Step 6: The Price Correction (Surgery)
The item at index 2 is incorrectly priced at 2500. It should be 250. 
Update the original array by removing the 2500 and inserting 250 in its place.
*/

let prices = [0, 150, 40, 2500, 0, 85, 120]

//Step 1: Remove the "Zero" Bug (Start)
prices.shift()
console.log(prices)

// Step 2: Add a Missing Price
// A new item was just loaded at the beginning of the list with a price of 99.
prices.unshift(99)
console.log(prices)

// Step 3: Check for Luxury Items
// Your test requirement says: "If any item costs 2500, mark the suite as 'High Value'."
// Task: Check if 2500 is in the list and log: "High Value Found: [true/false]".

console.log(`High Value Found:${prices.includes(2500)}`)

// Step 4: Find the Luxury Item's Position
// You need to tell the script exactly where that expensive item is so it can click it.

console.log(`High Value Item is at index: ${prices.indexOf(2500)}`)

// Step 5: The "Budget" View (Subset)
// The user clicked a filter for "Mid-Range Items." Create a new array called midRange containing the items from index 1 to 4.

let midRange = prices.slice(1,4)
console.log(`Mid-Range List: ${midRange}`)

// Step 6: The Price Correction (Surgery)
// The item at index 2 is incorrectly priced at 2500. It should be 250. 
// Update the original array by removing the 2500 and inserting 250 in its place.

midRange.splice(2,1,250)
console.log(midRange)
