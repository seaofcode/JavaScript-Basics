// Function Challenge #5

// 1. create "calculateTotal" function
// 2. add two parameters subTotal, tax
// 3. return sum of parameters

// 4. create 3 vars "order1","order2","order3"
// 5. call calculateResult, pass in some values and assign result to each order
// 6. log all three orders
// 7. refactor "calculateTotal" to function expression

function calculateTotal(subTotal, tax) {
    return subTotal + tax;
}

const order1 = calculateTotal(4, 3);
const order2 = calculateTotal(5, 6);
const order3 = calculateTotal(1, 5);

console.log(order1, order2, order3);

// refactoing to function expression

const calculateTotalExp = function (subTotal, tax) {
    return subTotal + tax;
}

const expressionSum = [calculateTotalExp(3, 5), calculateTotalExp(7, 2)];
console.log(expressionSum);


