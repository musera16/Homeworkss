function performArithmetic() {
    // Prompt the user to enter two numbers
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");

    // Convert the input strings to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    // Perform arithmetic operations
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;

    // Print the results to the console
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    console.log(`The difference between ${num1} and ${num2} is ${difference}`);
    console.log(`The product of ${num1} and ${num2} is ${product}`);
    console.log(`The quotient of ${num1} divided by ${num2} is ${quotient}`);
}
