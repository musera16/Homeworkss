// Example 1: Get elements by tag name and change their background color
const paragraphs1 = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs1.length; i++) {
    paragraphs1[i].style.backgroundColor = 'yellow';
}

// Example 2: Get elements by tag name and align their text
const headers2 = document.getElementsByTagName('h2');
for (let i = 0; i < headers2.length; i++) {
    headers2[i].style.textAlign = 'center';
}

// Example 3: Get elements by tag name and hide them
const divs3 = document.getElementsByTagName('div');
for (let i = 0; i < divs3.length; i++) {
    divs3[i].style.display = 'none';
}
