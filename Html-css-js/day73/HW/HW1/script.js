// 1. Create an object to represent a book
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925
  };
  
  // 2. Add a new property to an existing object
  book.genre = "Fiction";
  
  // 3. Delete a property from an object
  delete book.yearPublished;
  
  // 4. Access and print the value of a property in an object
  console.log(book.title);
  
  // 5. Check if a property exists in an object
  console.log('author' in book); // true
  
  // 6. Iterate over all properties of an object and print their values
  for (let key in book) {
    console.log(book[key]);
  }
  
  // 7. Create an array of objects, each representing a person with name and age properties
  let people = [
    { name: "Nika", age: 30 },
    { name: "Gio", age: 25 },
    { name: "Vova", age: 35 }
  ];
  
  // 8. Find the length of an object (number of properties)
  let bookLength = Object.keys(book).length;
  console.log(bookLength);
  
  // 9. Create an object with nested objects and access a property from the nested object
  let library = {
    section: {
      shelf: {
        book: {
          title: "1984",
          author: "George Orwell"
        }
      }
    }
  };
  console.log(library.section.shelf.book.title);
  
  // 10. Convert an object into an array of its property values
  let bookValues = Object.values(book);
  console.log(bookValues);

// 11. Create an array of numbers from 1 to 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 12. Add an element to the end of an array
numbers.push(11);

// 13. Add an element to the beginning of an array
numbers.unshift(0);

// 14. Remove the last element of an array
numbers.pop();

// 15. Remove the first element of an array
numbers.shift();

// 16. Find the length of an array
let length = numbers.length;
console.log(length);

// 17. Access the third element in an array
console.log(numbers[2]);

// 18. Iterate over an array and print each element
numbers.forEach(num => console.log(num));

// 19. Create a new array by doubling each element of an existing array
let doubled = numbers.map(num => num * 2);
console.log(doubled);

// 20. Reverse the order of elements in an array
numbers.reverse();
console.log(numbers);