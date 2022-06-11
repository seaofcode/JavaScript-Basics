// Conditional Statements #7

// 1. create two objects "person1", "person2"
// 2. setup name,age (15-25),
//    status ('resident', 'tourist') keys

// 3. setup if else, condition where
//    age must be bigger than 18 and status must be
//    equal to 'resident'
// 4. test with both objects

const person1 = {
    name: 'Gill',
    age: 16,
    status: 'resident',
};
const person2 = {
    name: 'Dave',
    age: 19,
    status: 'tourist',
};

if (person1.age >= 18 && person1.status === 'resident') {
    console.log(person1.name + ' is 18 or older and a resident');
}
else if (person1.age >= 18 && person1.status == 'tourist') {
    console.log(person1.name + ' is 18 or older but not a resident');
}
else {
    console.log(person1.name + ' is under 18 and not a resident');
}