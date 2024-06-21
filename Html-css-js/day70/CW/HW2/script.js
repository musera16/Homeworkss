let password = "secret"; // Define the correct password

while (true) {
    let userInput = prompt("Please enter your password:");
    
    if (userInput === password) {
        alert("Correct password! Welcome to the site.");
        break; // Exit the loop if password is correct
    } else {
        alert("Incorrect password. Please try again.");
    }
}
