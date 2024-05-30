// Prompt the user for their age
const age = prompt("How old are you?");

// Convert the input string to a number
const userAge = parseInt(age);

// Check if the user is old enough to enter the house
if (userAge >= 18) {
    console.log("You are welcome to enter the house ❤️");
} else {
    console.log("Sorry, you are not old enough to enter the house 😢");
}
