function calculateSquareRoot(number) {
    if (number < 0) {
        return "Invalid input. Please enter a non-negative number.";
    }
    return Math.sqrt(number);
}

console.log(calculateSquareRoot(16)); // Output: 4
