function compareDates(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    
    if (firstDate < secondDate) {
        return `${date1} is earlier than ${date2}`;
    } else if (firstDate > secondDate) {
        return `${date1} is later than ${date2}`;
    } else {
        return `${date1} and ${date2} are the same`;
    }
}

console.log(compareDates('2024-07-01', '2024-07-07')); // Output: 2024-07-01 is earlier than 2024-07-07
