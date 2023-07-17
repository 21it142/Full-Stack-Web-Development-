const circle = require('./module');

const a = 5;
const b=6;
const addition = circle.additionOfNumbers(a,b);
const multiplication = circle.multiplicationOfNumbers(a,b);

console.log('Two numbers are:',a,b);
console.log('Addition is:', addition);
console.log('Multiplication is:', multiplication);