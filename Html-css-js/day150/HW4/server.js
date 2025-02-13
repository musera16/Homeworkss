const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/cars', (req, res) => {
    res.json([
        { brand: 'BMW', model: 'X5', year: 2020, price: 45000 },
        { brand: 'Audi', model: 'A6', year: 2019, price: 40000 },
        { brand: 'Mercedes', model: 'E-Class', year: 2021, price: 55000 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
