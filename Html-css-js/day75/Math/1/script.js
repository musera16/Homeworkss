function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInteger(1, 10)); // Example output: a random integer between 1 and 10
