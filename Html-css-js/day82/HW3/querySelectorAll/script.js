// Example 1: Get all elements with a specific class and change their background color
const allHighlights = document.querySelectorAll('.highlight');
allHighlights.forEach(element => {
    element.style.backgroundColor = 'pink';
});

// Example 2: Get all paragraph elements and change their font style
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(element => {
    element.style.fontStyle = 'italic';
});

// Example 3: Get all elements with a specific ID and change their display
const allMainContent = document.querySelectorAll('#mainContent');
allMainContent.forEach(element => {
    element.style.display = 'block';
});
