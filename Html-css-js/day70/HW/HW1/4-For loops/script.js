// 1. Log numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Log even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

// 3. Calculate sum of numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// 4. Log multiples of 5 up to 50
for (let i = 5; i <= 50; i += 5) {
    console.log(i);
}

// 5. Log numbers 10 down to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 6. Calculate factorial of 5
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log(factorial);

// 7. Sum of numbers in array
let arr = [1, 2, 3, 4, 5];
sum = 0;
for (let num of arr) {
    sum += num;
}
console.log(sum);

// 8. Find largest number in array
let numbers = [10, 5, 8, 20, 2];
let largest = numbers[0];
for (let num of numbers) {
    if (num > largest) largest = num;
}
console.log(largest);

// 9. Count vowels in a string
let str = "hello world";
let vowelsCount = 0;
let vowels = "aeiou";
for (let char of str) {
    if (vowels.includes(char)) vowelsCount++;
}
console.log(vowelsCount);

// 10. Calculate average of numbers in array
numbers = [10, 20, 30, 40, 50];
sum = 0;
for (let num of numbers) {
    sum += num;
}
let average = sum / numbers.length;
console.log(average);
