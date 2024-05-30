// Ask the user for confirmation
const userConfirmed = confirm("Do you agree to proceed?");

// Check if the user clicked OK (true) or Cancel (false)
if (userConfirmed) {
    console.log("User agreed to proceed. Printing message to console.");
    console.log("Hello! Welcome to our website.");
} else {
    console.log("User declined to proceed.");
}
