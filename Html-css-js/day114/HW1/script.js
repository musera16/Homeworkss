const fs = require('fs');

for (let i = 1; i <= 10; i++) {
    fs.mkdirSync(`folder_${i}/classwork`, { recursive: true });
    fs.mkdirSync(`folder_${i}/homework`, { recursive: true });
    fs.writeFileSync(`folder_${i}/classwork.js`, `console.log("goa best");`);
    fs.writeFileSync(`folder_${i}/homework.js`, `console.log("goa best");`);
}

console.log('Folders and files created!');
