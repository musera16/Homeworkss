function welcomeUser() {
    // Prompt the user to enter their first name
    let firstName = prompt("Enter your first name:");
    
    // Prompt the user to enter their last name
    let lastName = prompt("Enter your last name:");
    
    // Check if the inputs are not empty
    if (firstName && lastName) {
        // Show a welcome message using alert
        alert(`Welcome ${firstName} ${lastName}`);
    } else {
        // Show an error message if any input is empty
        alert("Please enter both your first name and last name.");
    }
}
