function displayCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const formattedTime = `${hours}:${minutes}`;
    console.log(formattedTime);
}

displayCurrentTime();
