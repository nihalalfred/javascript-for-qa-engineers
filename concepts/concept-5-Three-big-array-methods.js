/**
 * 3 BIG ARRAY METHODS
 * Reduce, Filter, Map
 * 
 */

/**
 * 3 "Big" array methods, think of them as a factory assembly line. 
 * You start with a crate of raw materials (your array) and use different machines to process them.
 */

/**
*** MAP ***
 * The "Transformer"
 * It takes every item in your array, does something to it, 
 * and gives you a new array of the same length.
 * 
 * Real-world Analogy: A machine that takes raw potatoes and turns every single one into a French fry.
 * 
 * QA Analogy: Taking a list of usernames and converting them all to lowercase.
 * 
 * When to use: You want to change every item.
 */

let prices = [10, 20, 30];

// Double every price for a sale

let salePrices = prices.map(price=>price*2)
console.log(salePrices)

/**
*** FILTER ***
 * The "Security Guard"
 * It looks at every item and checks a condition. 
 * If the item passes (true), it stays. 
 * If it fails (false), it’s kicked out. 
 * The result is a new, shorter array.
 * 
 * .filter() > use to filter with a condition
 * 
 * Real-world Analogy: A sifter that keeps the big pasta but lets the small water droplets fall through.
 * 
 * QA Analogy: Filtering a list of test results to only show the "Fail" status.
 * 
 * When to use: You want to find specific items.
 */

let testResults = [45, 80, 32, 95, 50];

let testResultsAbove50 = testResults.filter(testResult=> testResult>=50) // Only keep marks that are 50 or higher
console.log(testResultsAbove50)

// create an array only taking the even scores or odd scores

let scores = [11, 22, 33, 44, 55, 66, 77, 88]

// using for loop for Odd scores

let oddScores = []

for(let i=0; i<scores.length; i++){
    if(scores[i]%2 !=0){
        oddScores.push(scores[i])
    }
}

console.log(oddScores)

// using filter for even scores

let evenScores = scores.filter(score=>score%2==0)
console.log(evenScores)


/**
*** REDUCE ***
 * The "Snowball"
 * It takes all the items in an array and "squashes" them down into one single value (like a sum, a product, or a string).  
 * 
 * .reduce() > use it for sum or multiplication Iterations
 * 
 * Real-world Analogy: A blender. You put in many fruits, but you get out one smoothie.
 * 
 * QA Analogy: Adding up the total cost of all items in a digital shopping cart.
 * 
 * When to use: You want a total or summary.
 * 
 * For Addition: Always start at 0.
 * For Multiplication: Always start at 1.
 * For Strings/Arrays: Usually start with "" or [].
 * 
 */


let cart = [100, 250, 50];

// sum starts at 0, then adds each price

let totalBill = cart.reduce((sum,price)=>sum+price,0)
console.log(totalBill)


let marks = [10,20,30,40,50]

/**
 * ()=> arrow function
 * takes two parameters example
 * logic example
 * initialisation 
 */

let total = marks.reduce((sum,mark)=>sum+mark,0)
console.log(total) //output will be 150
