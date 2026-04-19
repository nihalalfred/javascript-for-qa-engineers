// 1. A classic programming interview question that involves using array methods (filter, map, reduce) and JavaScript Objects.
    
//     Create an array of objects representing students with their names and scores, and get the below result with an optimised solution:
    
//     1. Filter out students who passed the exam with a score of more than 36
//     2. Update Passed Student names to upper case
//     3. Total score of all passing students.


const students = [
                    {name: "Andrew", score: 15},
                    {name: "Nihal", score: 100},
                    {name: "Alfred", score: 32},
                    {name: "Ana", score: 90}
                ];

const passedStudents = students.filter(student=> student.score >=36);
console.log(passedStudents);

//output: [ { name: 'Nihal', score: 100 }, { name: 'Ana', score: 90 } ]

const upperCasePassedStudents = passedStudents.map(student => student.name.toUpperCase());
console.log(upperCasePassedStudents);

//output: [ 'NIHAL', 'ANA' ]

const totalScore = passedStudents.reduce((acc, student)=>{
    acc = acc + student.score;
    return acc
},0);

console.log(totalScore);

//output: 190
