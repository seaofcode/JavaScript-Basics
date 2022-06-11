// Conditional Statements
// >, <, >=, <=, ==, ===, !=, !===
// else if

const value = true;

if(value) {
    console.log("Statement is True");
}

if (2 > 1 ) {
    console.log('2 is larger than 1');
}
else {
    console.log('If value is false');
}

const num1 = 6;
const num2 = 6;
const result = num1 >= num2;

if(num1 > num2) {
    console.log('first number is bigger than second');
} 
else if (result) {
    console.log('first is equal to second');
}
else {
    console.log('second is bigger than first');
}

const newValue = false;

if (!newValue) {
    console.log('Value is not True');
}

const num3 = 7;
const num4 = '7';

const newResult = num3 == num4;
const newResult2 = num3 === num4;

console.log(newResult); // True
console.log(newResult2); // False

// Logical Operators
// || - Or, && - AND, !

const name = 'bob';
const age = 33;

if (name === 'bob' && age === 33) {
    console.log('hello there bob');
} else {
    console.log('this is not bob');
}

// Switch 
// dice values : 1 - 6

const dice = 1;

switch (dice) {
    case 1:
        console.log('1'); 
        break;  
    case 2:
        console.log('2');
        break;
    case 3:
        console.log('3');
        break;
    default:
        console.log('did not roll');
}
