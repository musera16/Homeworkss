const express = require('express');
const app = express();

const phones = [
    { name: "iPhone 13", price: 799 },
    { name: "Samsung Galaxy S22", price: 849 },
    { name: "Google Pixel 7", price: 599 }
];

app.get('/api/phones', (req, res) => {
    res.json(phones);
});

app.use(express.static(__dirname));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
