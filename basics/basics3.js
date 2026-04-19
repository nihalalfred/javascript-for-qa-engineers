/**
 * if() {}
 * while() {}
 * do {} while(){}
 * for() {}
 * 
 */

/**
 * *** if (Decision Making) ***
 * Used to execute a block of code only if a specific condition is met.
 */

const flag = false


if (flag) {
    console.log("Condition Satisfied")
}
else {
    console.log("Condition Not Satisfied")
}

/** if() with negate operator 
*/

const isVisible = false

// though you have declared it as a constant, you are able to use the negate operator on it.   
// It doesn't change the value of the constant

if (!isVisible) {
    console.log("If Condition Satisfied", isVisible)
}
else 
{
    console.log("If Condition Not Satisfied")
}

console.log(isVisible)

/** 
 *** While (Condition-First) ***
 * This loop checks the condition first. 
 * If it’s true, it runs the code. 
 * If it’s false from the start, it never runs.
 * 
 */

let i = 0
while (i<10)
{
    i++
    console.log(i)
}

let required = true
while(required)
{
    console.log("I am inside while loop")
    required = false 
    // if this is not set to false will be an infinite loop
}

// /**
//  *** do while (Action-First) ***
//  * This is unique because it executes the code block at least once before checking the condition. 
//  * 
//  */

let j = 1
do 
{
    j++
}
while(j>10)
    {
console.log(j)
}

// /**
//  *** for (The Counter) **
//  * The most common loop. 
//  * It includes the initialization, the condition, and the increment all in one line.
//  * 
//  */


for (let k = 1; k<=5; k++)
    {
console.log(k)
    }

// /**
//  *** When to use what? ***
//  * 
//  * for > "Repeat X times."
//  * When you know the exact number of repetitions 
//  * (e.g., "Check all 5 checkboxes").
//  * 
//  * while > "Keep doing this until..."
//  * When you are waiting for a state change 
//  * (e.g., "Keep checking until the API returns 200").
//  * 
//  * do...while > "Do it once, then check."
//  * When you must perform the action 
//  * before checking the result.
//  * 
//  */

