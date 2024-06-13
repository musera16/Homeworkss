// 1. Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// 2. Multiply two numbers
function multiplyNumbers(a, b) {
    return a * b;
}

// 3. Calculate rectangle area
function calculateRectangleArea(width, height) {
    return width * height;
}

// 4. Calculate circle circumference
function calculateCircleCircumference(radius) {
    return 2 * Math.PI * radius;
}

// 5. Check if number is even
function isEven(num) {
    return num % 2 === 0;
}

// 6. Find max of two numbers
function findMax(a, b) {
    return a > b ? a : b;
}

// 7. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 8. Generate numbers array
function generateNumbersArray(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

// 9. Sum of numbers in array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 10. Check if number is a perfect number
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}
