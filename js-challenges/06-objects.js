// ## Objects #6

// 1. create car object
// 2. add make, model, year, colors (array),
//    hybrid (boolean) keys
// 3. add two methods (drive and stop)
// 4. in the function body setup log with random text
// 5. log make
// 6. log first color
// 7. invoke both methods

const car = {
    make: 'Toyota',
    model: 'Prius',
    year: 2007,
    colors: ['Grey','Black'],
    hybrid: true,
    drive: function () {
        console.log('Accelerate');
    },
    stop: function () {
      console.log('Stop');  
    },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();