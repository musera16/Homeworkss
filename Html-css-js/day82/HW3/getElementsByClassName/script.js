// Example 1: Get elements by class name and change their text color
const elements1 = document.getElementsByClassName('highlight');
for (let i = 0; i < elements1.length; i++) {
    elements1[i].style.color = 'red';
}

// Example 2: Get elements by class name and add a border
const elements2 = document.getElementsByClassName('box');
for (let i = 0; i < elements2.length; i++) {
    elements2[i].style.border = '2px solid black';
}

// Example 3: Get elements by class name and change their font size
const elements3 = document.getElementsByClassName('text-item');
for (let i = 0; i < elements3.length; i++) {
    elements3[i].style.fontSize = '20px';
}
