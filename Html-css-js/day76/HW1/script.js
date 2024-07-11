// Function to find the first non-repeating character in a string
function firstNonRepeatingLetter(s) {
    // Convert the string to lowercase to ignore case sensitivity
    const lower_s = s.toLowerCase();
    
    // Loop through each character in the string
    for (let i = 0; i < s.length; i++) {
      // Check if the current character is unique in the string
      if (lower_s.indexOf(lower_s[i]) === lower_s.lastIndexOf(lower_s[i])) {
        // Return the original character from the string
        return s[i];
      }
    }
    
    // If no non-repeating character is found, return an empty string
    return "";
  }
  
  // Example usage
  console.log(firstNonRepeatingLetter("stress")); // Output: "t"
  console.log(firstNonRepeatingLetter("sTreSs")); // Output: "T"
  console.log(firstNonRepeatingLetter("aabbcc")); // Output: ""
  