/**
 * Var
 * Let
 * Const
 * Var vs. Let vs. Const
 */

/**
 * Variables are named containers used to store data values
 * Name comes from the fact that the data inside them can vary (change) while the program is running.
 */

/**
 * 3 parts of a variable
 * // Declaration  Name      Value
      let      retryCount =  3;
 * 
 */

 /**
  * JavaScript is loosely typed, 
  * meaning you don't have to declare if a variable is a string or a number; 
  * the browser figures it out automatically.
  */

let a = 1 //number >  includes integers and decimals
let firstName = "Nihal" //string >  text wrapped in quotes
let flagStatus = true //boolen >  true or false values
let x = null //null >  intential absense of value
let y // undefined > variable declared but not assigned

/**
 * typeof()
 * Used to determine what is the type for the variable
 */

console.log(typeof(a)) // this will print number

/**
 * The Negate Operator (!)
 * The negate operator can only be used for boolean variable types.
 * In QA automation), we use this constantly to check if an element is not visible.
 */

flagStatus = false
console.log(!flagStatus) // true
console.log(flagStatus) //false 

/**
 * Var vs. Let vs. Const
 */

/**
 * var (The Old Way) 
 * Before ES6 (ECMAScript 2015 || ES2015)
 * ECMA > European Computer Manufacturers Association
 * 
 * Redeclaration: Allowed
 * Reassign: Allowed 
 * Scope: Function Scoped >> It ignores "blocks" like if statements or for loops.
 * 
 */

/**
 * let (The Modern Way) ES6
 * Redeclaration: Not allowed
 * Reassigned: Allowed
// Scope: Block-scoped {}. > If you define it inside an if statement, it stays there
 * 
 */

/** 
 * const (The Secure Way) ES6
 * Scope: Block-scoped {}
 * Rule: Can't be reassigned or redeclared
 * Use case: POM or URLs that should never change during a test
 * 
*/

var tool = "cypress"
let language = "JavaScript"

if (true){
    var tool = "Playwright" // Overwrites global variable
    let language = "TypeScript" // creates a new variable inside block only
    console.log("----INSIDE BLOCK----")
    console.log(`tool: ${tool}`)
    console.log(`language: ${language}`)
}
console.log("---OUTSIDE BLOCK----")
console.log(`tool: ${tool}`)
console.log(`language: ${language}`)
language = "Java" // reassign > allowed
// let language ="swift" redeclare > not allowed
tool = "Appium" // reassign > allowed
var tool = "XCUITest" // redeclare > allowed
console.log(`tool: ${tool}`) // What would this be?
console.log(`language: ${language}`) // What will this be?
