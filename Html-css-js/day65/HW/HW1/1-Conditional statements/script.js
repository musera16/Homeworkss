// 1. Check if number is positive, negative, or zero
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// 2. Check if number is even or odd
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// 3. Check if year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("Leap Year");
    } else {
        console.log("Not a Leap Year");
    }
}

// 4. Return the larger of two numbers
function getLarger(a, b) {
    return a > b ? a : b;
}

// 5. Return the smallest of three numbers
function getSmallest(a, b, c) {
    return Math.min(a, b, c);
}

// 6. Check if string is empty
function isEmptyString(str) {
    return str.length === 0;
}

// 7. Check if string is a palindrome
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 8. Convert numeric grade to letter grade
function getLetterGrade(grade) {
    if (grade >= 90) return 'A';
    if (grade >= 80) return 'B';
    if (grade >= 70) return 'C';
    if (grade >= 60) return 'D';
    return 'F';
}

// 9. Check if number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 10. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
