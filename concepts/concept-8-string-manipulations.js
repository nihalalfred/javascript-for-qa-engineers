// crucial topic for QA engineers because automation often involves "scraping" 
// text from a website, cleaned up to verify data.

// In test automation, we treat strings like arrays of characters. 
// We use these methods to extract Order IDs, verify success messages, or clean up prices.

// Basics & Formatting

let day = "Tuesday ";
console.log(day[0]);            // "T"
console.log(day.length);         // 8 (includes the space)
console.log(day.trim().length);  // 7 (space removed)

// 2. Extracting Data: .slice() & .split()

// .slice(start, end): Extracts a part of a string.

// .split(separator): Breaks a string into an Array. This is very useful for getting specific data out of a sentence.

// Extracting a substring
let subDay = day.slice(0, 4); // "Tues"

// Splitting into an array
let splitDay = day.split("s"); 
console.log(splitDay); // [ 'Tue', 'day ' ]

// 3. Type Conversion (String ↔ Number)

// Web elements always return data as Strings. 
// If you want to do math (like verifying a total price), you must convert them.

// parseInt(): Converts a string to an integer.

// .toString(): Converts a number back to a string.

let currentDate = '23';
let nextDate = '27';

let diff = parseInt(nextDate) - parseInt(currentDate);
console.log(diff); // 4 (Numeric result)

// 4. Advanced Searching: The "Occurrences" Logic

let dayOfWeek = "Tuesday ";
let quote = "is Funday day day day";
let newquote = dayOfWeek + quote; // Concatenation

let count = 0;
let val = newquote.indexOf("day");

//In JavaScript, when you ask .indexOf() to find a word 
// that does not exist in a string, it doesn't give an error; it returns -1.

while(val !== -1) {
    count++;
    // Start searching again, but move one step past the last found 'day'
    val = newquote.indexOf("day", val + 1);
}

console.log("Total occurrences of 'day':", count); // 5
