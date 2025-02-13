const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/computers', (req, res) => {
    res.json([
        { brand: 'Dell', model: 'XPS 13', specs: 'Intel i7, 16GB RAM, 512GB SSD', price: 3500 },
        { brand: 'HP', model: 'Pavilion', specs: 'Intel i5, 8GB RAM, 1TB HDD', price: 2500 },
        { brand: 'Apple', model: 'MacBook Pro', specs: 'M1 Chip, 16GB RAM, 1TB SSD', price: 5000 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
