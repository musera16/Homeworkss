// Get user input
let input = prompt("Please enter two numbers separated by a comma:");
let numbers = input.split(',');
let num1 = parseFloat(numbers[0]);
let num2 = parseFloat(numbers[1]);

// Perform mathematical operations
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num2 !== 0 ? num1 / num2 : "Undefined";

// Display results
console.log("Results:");
console.log("- Addition (+):", addition);
console.log("- Subtraction (-):", subtraction);
console.log("- Multiplication (*):", multiplication);
console.log("- Division (/):", division);
