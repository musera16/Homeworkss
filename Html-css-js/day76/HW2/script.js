// Function to rearrange digits of a number in descending order
function descendingOrder(n) {
    // Convert the number to a string
    const str_n = String(n);
    
    // Initialize an array to store the digits
    const numbers = [];
    
    // Loop through each character in the string
    for (let i = 0; i < str_n.length; i++) {
      // Convert the character back to a number and push to the array
      numbers.push(Number(str_n[i]));
    }
    
    // Sort the array in descending order
    numbers.sort(function(a, b) { return b - a });
    
    // Initialize a string to build the result
    let result = '';
    
    // Loop through the sorted array and build the result string
    for (let i = 0; i < numbers.length; i++) {
      result += String(numbers[i]);
    }
    
    // Convert the result string back to a number and return it
    return Number(result);
  }
  
  // Example usage
  console.log(descendingOrder(42145)); // Output: 54421
  console.log(descendingOrder(145263)); // Output: 654321
  console.log(descendingOrder(123456789)); // Output: 987654321
  