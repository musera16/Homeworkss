// 1. Create person object
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// 2. Access name and age
console.log(person.name);
console.log(person.age);

// 3. Add email property
person.email = "john@example.com";

// 4. Create car object
let car = {
    make: "Toyota",
    model: "Camry",
    owner: {
        name: "Alice",
        age: 28
    }
};

// 5. Access car owner's name and age
console.log(car.owner.name);
console.log(car.owner.age);

// 6. Change car model
car.model = "Corolla";

// 7. Add method to calculate car age
car.getCarAge = function(manufactureYear, currentYear) {
    return currentYear - manufactureYear;
};

// 8. Iterate over person properties
for (let prop in person) {
    console.log(prop + ": " + person[prop]);
}
