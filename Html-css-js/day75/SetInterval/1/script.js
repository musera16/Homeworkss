function countdown(seconds) {
    const intervalId = setInterval(() => {
        console.log(seconds);
        seconds--;

        if (seconds < 0) {
            clearInterval(intervalId);
            console.log('Time\'s up!');
        }
    }, 1000);
}

countdown(10); // Example: starts countdown from 10 seconds
