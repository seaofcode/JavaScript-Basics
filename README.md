# JavaScript-Basics

## Language Overview and Practice

[Netlify Deployment - JavaScript Basics](https://web-mjp-javascriptbasics.netlify.app/index.html)

### Comments and Statements

// document.write('hello world');\
console.log('hello world');

### Variables

// Declare and Assign\
let myName = "Matthew";\
console.log(myName);

let address, zip, state;\
address = "144 main street";\
zip = '34323';\
state = 'TX';\
console.log(address,zip,state);

can contain digits, letters, underscore, $\
must start with letter, $ or \_\
no keywords\
cannot start with number\
case sensitive - fullname vs Fullname\
camelCase or underscore

[Variable Challenge #1](https://web-mjp-javascriptbasics.netlify.app/html-challenges/vars.html)

### Strings

String Concatenation - combine string values\
`` - backticks (template strings) easier option

const firstName = 'shake';\
const lastName = 'and bake';\
let fullName = firstName + ' ' + lastName;

console.log('hello there ' + fullName);

[String Challenge #2](https://web-mjp-javascriptbasics.netlify.app/html-challenges/string.html)

### Numbers and Math Operators

Loosely Typed = dont declare type

const myInteger = 38;\
const myFloat = 2.45;

const add = myInteger + myFloat;\
const sub = myInteger - myFloat;\
const mult = myInteger \* myFloat;\
const div = myInteger / myFloat;

console.log(add);\
console.log(sub);\
console.log(mult);\
console.log(div);

+=, -=, \*=, /=, ++, --, &\
Modulus & returns the ramainder after integer division

let myInt2 = 40;\
myInt2 += 5;\
myInt2 -= 5;\
myInt2 \*= 5;\
myInt2 /= 5;

myInt2++;\
myInt2--;

console.log(myInt2);

const slices = 10;\
const people = 3;\
const amount = slices % children;

console.log(amount);

[Numbers Challenge #3](https://web-mjp-javascriptbasics.netlify.app/html-challenges/numbers.html)

### Data Types - 7 Total

Primitive - String, Number, Boolean, Null, Undefined, Symbol
Object - Arrays, Functions, Objects

typeof - operator (typeof variable) (typeof vaule)

String
const text = 'my text';
Number
const myInt = 23;
Boolean
let isGrounded = true;
Null
const result = null;
Undefined
let name;
Symbol(ES6)

### Arrays, Functions and Objects

Arrays - [], 0 index based

const partyMembers = ['Jooker', 'Olla', 'Kulu', 'Falldom'];

console.log(partyMembers[0]);

[Arrays Challenge #4](https://web-mjp-javascriptbasics.netlify.app/html-challenges/arrays.html)

### Functions

// Declaration\
function hello() {\
console.log('hello there');\
console.log('hi guys');\
console.log('hey everyone');\
}

// Invoke\
hello();

// Parameters and Arguments\
function helloAgain(name) {\
console.log('Hello there '+ name);\
}

// name passed as parameter, string as argument\
helloAgain('Jeffy');\
helloAgain('Amanda');

// Function - return

// Declare Variables\
const wallHeight = 80;\
const wallWidth = 100;

// Declare function, take value from argument, calculate into newValue var\
// return value\
function calculate(value) {\
const newValue = value \* 2.54;\
console.log('the value in cm is : ' + newValue + ' cm');\
return value;\
}

// pass in wallWidth, wallHeight arguments, store returned value in new var\
const width = calculate(wallWidth);\
const height = calculate(wallHeight);

// add results into an Array, console log results\
const dimensions = [width, height];\
console.log(dimensions);

// Function Expressions\
const add = function (num1, num2) {\
return num1 + num2;\
}

const sumValues = [add(5, 5), add(15, 2)];\
console.log(sumValues);

[Functions Challenge #5](https://web-mjp-javascriptbasics.netlify.app/html-challenges/functions.html)

### Objects

const person = {
name: 'john',
lastName: 'peters',
age:40,
education: false,
married: true,
siblings: ['anna', 'susan', 'peters'],
greeting: function () {
console.log('Hello my name is John');
},
};

console.log(person.name);
person.greeting();

[Objects Challenge](https://web-mjp-javascriptbasics.netlify.app/html-challenges/objects.html)

### Conditionals

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

[Condtiontals Challenge](https://web-mjp-javascriptbasics.netlify.app/html-challenges/conditionals.html)

### Loops

// Loops
// repeatedly run a block of code while the condition is true

// while loop
let amount = 10;

while (amount > 0) {
console.log('I have ' + amount + " dollars");
amount--;
}

// do while loop
// code block first, condition second
// runs at least once

let money = 0;

do {
console.log('You have ' + money + ' dollars');
money++;
} while (money < 10);

// for loop
// repeatedly run a block of code while condition is true

let i;
for (i = 0; i < 10; i++) {
console.log('and the number is :' + i);
}

for (let number = 11; number >= 0; number--) {
console.log('and the number is :' + number);
}

### String Properties and Methods

// String properites and methods
// wrapper String Object
let text = ' Joe Buckwheat';
let result = text.length;

console.log(result);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(text.length - 1));
console.log(text.indexOf('w'));
console.log(text.trim());
console.log(text.startsWith(' Joe'));
console.log(text.trim().toLowerCase().startsWith('joe'));
console.log(text.includes('eat'));
console.log(text.slice(0, 5));
console.log(text.slice(-1));

// Template Literals - ES6+
// Backtick characters ``
// Interpolation ${} - insert expression(value)

const name = 'dewey';
const age = '23';
const value = `Hey it's ${name} and he is ${age} years old and here is an expression ${4 + 6}`;
console.log(value);

[Strings Properties and Methods Challenge](https://web-mjp-javascriptbasics.netlify.app/html-challenges/stringpropmeth)
