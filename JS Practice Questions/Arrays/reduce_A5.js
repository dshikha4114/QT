const numbers = [10, 25, 40, 5, 60];
const maxValue = numbers.reduce((max, current) => Math.max(max, current), numbers[0]);

console.log(maxValue); 