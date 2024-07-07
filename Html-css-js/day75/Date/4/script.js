function calculateDaysBetweenDates(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Hours * minutes * seconds * milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    
    const differenceInTime = Math.abs(secondDate - firstDate);
    const differenceInDays = Math.round(differenceInTime / oneDay);
    
    return differenceInDays;
}

console.log(calculateDaysBetweenDates('2024-07-01', '2024-07-07')); // Output: 6
