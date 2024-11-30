// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Add click event listeners
buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert(`${button.textContent} button clicked!`);
  });
});
