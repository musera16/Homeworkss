function getDayOfWeek(number) {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (number < 1 || number > 7) {
        return "Invalid number. Please enter a number between 1 and 7.";
    }
    return daysOfWeek[number - 1];
}

console.log(getDayOfWeek(1)); // Output: Monday
