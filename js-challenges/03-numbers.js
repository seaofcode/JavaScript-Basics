// ## Numbers #3

// 1. create "score1", "score2", "score3" variables and
//    assign values (0-100)
// 2. calculate total score and average score, and assign them to the variables.
// 3. log total score and average score

// 4. create "plates" variable and assign 20
// 5. create "people" variable and assign 7
// 6. calculate remaining plates and assign to the variable
// 7. add one to remaining plates
// 8. create message variable and display 'There are (your value goes here) plates available' - string concatenation
// 9. log message

// Steps 1 - 3
const score1 = 25;
const score2 = 50;
const score3 = 75;
const lineBreak = ' ';

const total = score1 + score2 + score3;
const average = total / 3;

console.log(total, average);

// document.write(total + '\n' + average);

// Steps 4 - 9
const plates = 20;
const people = 7;

let remainingPlates = plates & people;
remainingPlates++;

const displayMessage = 'There are ' + remainingPlates + ' plates available';
console.log(displayMessage);
document.write(displayMessage);



