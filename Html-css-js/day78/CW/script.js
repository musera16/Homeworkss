// ID-ით ელემენტის არჩევა.
const title = document.getElementById('main-title');
console.log(title);

// კლასი სახელით ელემენტების არჩევა.
const paragraphs = document.getElementsByClassName('paragraph');
console.log(paragraphs);

// ტეგის სახელით ელემენტების არჩევა.
const allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);

// CSS სელექტორით პირველი ელემენტის არჩევა.
const firstParagraph = document.querySelector('.paragraph');
console.log(firstParagraph);

// CSS სელექტორით ყველა ელემენტის არჩევა.
const allParagraphsQS = document.querySelectorAll('.paragraph');
console.log(allParagraphsQS);