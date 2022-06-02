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
