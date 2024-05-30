function sumEvenNumbers(start, end) {
    // Initialize the sum variable to 0
    let sum = 0;

    // Use a for loop to iterate from start to end, inclusive
    for (let i = start; i <= end; i++) {
        // Check if the number is even
        if (i % 2 === 0) {
            sum += i; // Add the even number to the sum
        }
    }

    // Return the final sum of even numbers
    return sum;
}

// Example usage:
let start = 1;
let end = 10;
let result = sumEvenNumbers(start, end);
console.log(`The sum of even numbers from ${start} to ${end} is ${result}`);