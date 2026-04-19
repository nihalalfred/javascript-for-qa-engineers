/**
 * 3 EQUAL TRIOS
 * =
 * ==
 * ===
 * What is the difference??
 */

/**
 * = >> Assignment
 * == >> Assertion || Comparison || Checks value only (ignores type).
 * === >> Type Check || Strict Comparison || Checks value AND type.
 */

console.log(5=='5'); 
// true as this assertion only 
// checks for character match only

console.log(5==='5'); 
// false as these assertions
// checks for both character and type match

/**
 * In automation, always prefer ===. 
 * It prevents "hidden" bugs 
 * where a string "5" passes a test that was expecting a number 5.
 * 
 */
