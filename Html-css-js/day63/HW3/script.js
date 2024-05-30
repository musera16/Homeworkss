document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const dob = document.getElementById('dob').value;
    
    // Generate a random ID (for simplicity, just a random number)
    const userId = Math.floor(Math.random() * 10000);
    
    const userProfile = {
        id: userId,
        firstName: firstName,
        lastName: lastName,
        age: age,
        dob: dob
    };
    
    console.log(`My Profile Object ❤️:
    ID: ${userProfile.id}
    First Name: ${userProfile.firstName}
    Last Name: ${userProfile.lastName}
    Age: ${userProfile.age}
    Date of Birth: ${userProfile.dob}`);
});
