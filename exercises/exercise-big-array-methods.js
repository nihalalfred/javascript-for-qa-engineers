/* 
🧪 The Lab: "The Test Suite Auditor"
The Scenario: You just ran a suite of 5 tests. You have an array of objects 
(a common data structure in JS) representing the results.

const testResults = [
    { name: "Login", status: "Fail", duration: 120 },
    { name: "Search", status: "Pass", duration: 45 },
    { name: "Checkout", status: "Fail", duration: 200 },
    { name: "Logout", status: "Pass", duration: 30 },
    { name: "Profile", status: "Pass", duration: 60 }
];

Step 1: The filter() (Find the Bugs)
Create a new array called failedTests that contains only the objects where the status is "Fail".

Goal: Isolate the problems.

Step 2: The map() (Extract the Names)
Take your failedTests array and create a new array of strings containing only the name of the failed tests.

Goal: Get a clean list of names for a bug report.

Step 3: The reduce() (Total Downtime)
Go back to the original testResults array and calculate the Total Duration of all tests combined.

Goal: Find out how long the whole suite took to run.

*/

const testResults = [
    { name: "Login", status: "Fail", duration: 120 },
    { name: "Search", status: "Pass", duration: 45 },
    { name: "Checkout", status: "Fail", duration: 200 },
    { name: "Logout", status: "Pass", duration: 30 },
    { name: "Profile", status: "Pass", duration: 60 }
];

// Step 1: The filter() (Find the Bugs)
// Create a new array called failedTests that contains only the objects where the status is "Fail".

const failedTests = testResults.filter(test=>test.status==="Fail")
console.log("Failed Tests: ",failedTests)


// Step 2: The map() (Extract the Names)
// Take your failedTests array and create a new array of strings containing only the name of the failed tests.

// Goal: Get a clean list of names for a bug report.

const failedNames = failedTests.map(test=>test.name)
console.log("Failed Test Names: ", failedNames)

// Step 3: The reduce() (Total Downtime)
// Go back to the original testResults array and calculate the Total Duration of all tests combined.

// Goal: Find out how long the whole suite took to run.

const totalTime = testResults.reduce((sum,test)=>sum+test.duration,0)
console.log("Total Duration Of Test Suite: ",totalTime)

/*
*** CHAINING ***
***********************************************
Create a new array of only even numbers and then multiply it by 5
and then take the total of the same
***********************************************
*/

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

const total = numbers.filter(number=>(number%2)==0).map(number=>number*5).reduce((sum,number)=>sum+number,0)
console.log(total)
