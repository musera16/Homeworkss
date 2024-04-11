function ageCheck(age) {
    if (age > 18) {
        console.log("ასაკი მეტია 18-ზე");
    } else if (age < 18) {
        console.log("ასაკი ნაკლებია 18-ზე");
    } else {
        console.log("ასაკი ტოლია 18-ის");
    }
}

// Calling a function multiple times with different numeric values
ageCheck(20);
ageCheck(15);
ageCheck(18);

