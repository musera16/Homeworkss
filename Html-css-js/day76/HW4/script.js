// Simple Version
function getCount(str) {
    const vowels = 'aeiou';  // A string containing all vowels
    let count = 0;  // Initialize the count of vowels
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the character is a vowel
      if (vowels.indexOf(str[i]) !== -1) {
        count++;  // Increment the count if the character is a vowel
      }
    }
    
    return count;  // Return the total count of vowels
  }
  
  // Example Tests
  console.log(getCount("hello")); // Output: 2  (e, o)
  console.log(getCount("world")); // Output: 1  (o)
  console.log(getCount("programming")); // Output: 3  (o, a, i)
  console.log(getCount("")); // Output: 0  (empty string)
  console.log(getCount("aeiou")); // Output: 5  (a, e, i, o, u)
  