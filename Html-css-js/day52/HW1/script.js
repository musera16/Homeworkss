function infoJoin(name, surname, age, location, interest) {
    var info = {
        name: name,
        surname: surname,
        age: age,
        location: location,
        interest: interest
    };
    return info;
}

// მაგალითის გამოყენება:
var myInfo = infoJoin("Nika", "Museride", 16, "Tbilisi", "coding");
console.log(myInfo);