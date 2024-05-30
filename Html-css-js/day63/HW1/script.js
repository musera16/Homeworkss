document.getElementById('bankForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userId = 'ID' + Math.floor(Math.random() * 10000);
    
    const user = {
        id: userId,
        name: name,
        email: email
    };
    
    console.log('User Registered:', user);
    
    // Optionally clear the form
    document.getElementById('bankForm').reset();
});
