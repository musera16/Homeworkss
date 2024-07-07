function displayCurrentDate() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so we add 1
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    
    const formattedDate = `${month}/${day}/${year}`;
    console.log(formattedDate);
}

displayCurrentDate();
