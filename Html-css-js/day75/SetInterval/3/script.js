function generateRandomNumber() {
    setInterval(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log(randomNumber);
    }, 2000);
}

generateRandomNumber(); // Start generating random numbers every 2 seconds
