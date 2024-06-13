// 1. Log numbers 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2. Log numbers 10 down to 1
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// 3. Calculate factorial of n
function factorial(n) {
    let result = 1;
    let i = n;
    while (i > 0) {
        result *= i;
        i--;
    }
    return result;
}

// 4. Generate Fibonacci sequence up to n
function fibonacci(n) {
    let a = 0, b = 1, temp;
    while (a <= n) {
        console.log(a);
        temp = a;
        a = b;
        b = temp + b;
    }
}

// 5. Reverse a number
function reverseNumber(n) {
    let reversed = 0;
    while (n > 0) {
        reversed = reversed * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return reversed;
}

// 6. Find the largest digit in a number
function largestDigit(n) {
    let largest = 0;
    while (n > 0) {
        let digit = n % 10;
        if (digit > largest) largest = digit;
        n = Math.floor(n / 10);
    }
    return largest;
}

// 7. Check if number is a palindrome
function isNumberPalindrome(n) {
    return n === reverseNumber(n);
}

// 8. Calculate sum of digits of a number
function sumOfDigits(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

// 9. Check if number is prime
function isPrimeNumber(n) {
    if (n <= 1) return false;
    let i = 2;
    while (i <= Math.sqrt(n)) {
        if (n % i === 0) return false;
        i++;
    }
    return true;
}

// 10. Reverse a string
function reverseString(str) {
    let reversed = '';
    let i = str.length - 1;
    while (i >= 0) {
        reversed += str[i];
        i--;
    }
    return reversed;
}
